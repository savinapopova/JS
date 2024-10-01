import {hideSections} from './utils/hideSections.js';

export function showYears() {
    hideSections();
    const yearsSection = document.querySelector('#years');
    yearsSection.style.display = 'block';
}
