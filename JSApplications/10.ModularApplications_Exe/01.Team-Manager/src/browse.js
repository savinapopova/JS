import {getUrl, html, loggedUser, render} from "./lib.js";
import {get} from "./request.js";

const browseTemplate = (teams) => html`
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
        ${teams.map(cardTemplate)}
    </section>
`;

const cardTemplate = (team) => html`
    <article class="layout">
        <img src="${team.logoUrl}" class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">150 Members</span>
            <div><a href="#" class="action">See details</a></div>
        </div>
    </article>
`;

export async function showBrowse(ctx) {
    try {
        let teams = await get(getUrl().browse);

        render(browseTemplate(teams), ctx.root);

    } catch (e) {
        console.log(e);
        return;
    }
}
