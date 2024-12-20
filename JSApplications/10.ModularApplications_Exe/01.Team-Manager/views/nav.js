import {html, loggedUser, render} from "../api/lib.js";
import {logout} from "./login.js";

const navRoot = document.querySelector('nav');

const guestNavTemplate = html`
    <a href="/browse" class="action">Browse Teams</a>
    <a href="/login" class="action">Login</a>
    <a href="/register" class="action">Register</a>
`;
const userNavTemplate = html`
    <a href="/browse" class="action">Browse Teams</a>
    <a href="#" class="action">My Teams</a>
    <a href="#" @click="${logout}" class="action">Logout</a>
`;

export function setNav() {

    if (loggedUser()) {
        render(userNavTemplate, navRoot);
    } else {
        render(guestNavTemplate, navRoot);
    }
}
