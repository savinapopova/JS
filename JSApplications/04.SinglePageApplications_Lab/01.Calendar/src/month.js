import {hideSections} from './utils/hideSections.js';

export function showMonth(id) {
    hideSections();
    document.getElementById(id).style.display = 'block';
}
