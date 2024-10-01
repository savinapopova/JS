import {hideSections} from './utils/hideSections.js';

export function displayYearSection(id) {
    hideSections();
    document.getElementById(id).style.display = "block";

}
