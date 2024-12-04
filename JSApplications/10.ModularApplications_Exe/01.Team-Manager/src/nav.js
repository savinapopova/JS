import {html, loggedUser, render} from "./lib.js";

const navRoot = document.querySelector('nav');

const guestNavTemplate = html`
    <a href="#" class="action">Browse Teams</a>
    <a href="/login" class="action">Login</a>
    <a href="#" class="action">Register</a>
`;
const userNavTemplate = html`
    <a href="#" class="action">Browse Teams</a>
    <a href="#" class="action">My Teams</a>
    <a href="#" class="action">Logout</a>
`;

export function setNav() {

    if (loggedUser()) {
        render(userNavTemplate, navRoot);
    } else {
        render(guestNavTemplate, navRoot);
    }
}
