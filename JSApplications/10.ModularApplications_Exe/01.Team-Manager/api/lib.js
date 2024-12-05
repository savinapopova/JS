import {html, render} from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

function loggedUser() {
    return sessionStorage.getItem('user');
}

function getUrl() {
    const urls = {
        register: 'http://localhost:3030/users/register',
        login: 'http://localhost:3030/users/login',
        logout: 'http://localhost:3030/users/logout',
        browse: 'http://localhost:3030/data/teams/',
        members: 'http://localhost:3030/data/members?where=status%3D%22member%22',

    }

    return urls;
}

export {html, render, page, loggedUser, getUrl};
