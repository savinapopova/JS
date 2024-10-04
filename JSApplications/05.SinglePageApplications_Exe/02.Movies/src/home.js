import {showNav} from "./nav.js";
import {hideSections, showSection} from "./sections.js";
import {showMovies} from "./movies.js";


export async function showHome() {

    hideSections();
    showSection('home-page');
    showNav();
    await showMovies();

    if (localStorage.user) {
        showSection('add-movie-button');
    }
}
