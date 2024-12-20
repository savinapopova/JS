import {html, loggedUser, render} from "../api/lib.js";

export function showHome(ctx) {

    const homeTemplate = html`
        <section id="home">
                            <article class="hero layout">
                                <img src="./assets/team.png" class="left-col pad-med">
                                <div class="pad-med tm-hero-col">
                                    <h2>Welcome to Team Manager!</h2>
                                    <p>Want to organize your peers? Create and manage a team for free.</p>
                                    <p>Looking for a team to join? Browse our communities and find like-minded people!</p>
                                    <a href="/browse" class="action cta">Browse Teams</a>
                                    ${!loggedUser()
                                            ? html`<a href="/register" class="action cta">Sign Up Now</a>`
                                            : ''
                                      }
                                </div>
                            </article>
                        </section>
    `;
    render(homeTemplate, ctx.root);
}
