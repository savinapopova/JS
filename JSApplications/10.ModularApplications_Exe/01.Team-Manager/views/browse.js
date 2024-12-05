import {getUrl, html, loggedUser, render} from "../api/lib.js";
import {get} from "../api/request.js";
import {getMembers} from "../src/util.js";

const browseTemplate = (teams, members) => html`
    <section id="browse">
        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>
        ${loggedUser() 
                ? html`
            <article class="layout narrow">
                <div class="pad-small"><a href="#" class="action cta">Create Team</a></div>
            </article>` 
                : ''}
        ${teams.map(t => cardTemplate(t, members.filter(m => m.teamId === t._id).length))}
    </section>
`;

const cardTemplate = (team, count) => html`
    <article class="layout">
        <img src="${team.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${count} Members</span>
            <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
    </article>
`;

export async function showBrowse(ctx) {
    try {
        let teams = await get(getUrl().browse);
        let members = await getMembers();

        render(browseTemplate(teams, members), ctx.root);
    } catch (e) {
        console.log(e);
        return;
    }
}
