import {html, render} from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

function loggedUser() {
    return localStorage.getItem('user');
}

function getUrl() {
    const urls = {
        register: 'http://localhost:3030/users/register',
        login: 'http://localhost:3030/users/login',
        logout: 'http://localhost:3030/users/logout',
        catalog: 'http://localhost:3030/data/catalog/',

    }

    return urls;
}

export {html, render, page, loggedUser, getUrl};
