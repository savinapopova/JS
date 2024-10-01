import { showYears } from './years.js';
import { displayYearSection} from './year.js';
import {mapMonth} from './utils/monthsMap.js';
import {showMonth} from './month.js';

showYears();

let years = document.querySelectorAll('.yearsCalendar .day');
console.log(Array.from(years));
Array.from(years).forEach(year => {
    year.addEventListener('click',() => {
    displayYearSection(`year-${year.querySelector('.date').textContent}`);
});
});

let yeaHeadings = document.querySelectorAll('.monthCalendar caption');
console.log(yeaHeadings);
Array.from(yeaHeadings)
    .forEach(h => h.addEventListener('click', showYears));

let months = document.querySelectorAll('.monthCalendar .day');
console.log(Array.from(months));
Array.from(months)
    .forEach(m => m.addEventListener('click', () => {
        let currentYear = m.parentElement
            .parentElement
            .parentElement
            .querySelector('caption').textContent;
        let currentMonth = mapMonth(m.querySelector('.date')
            .textContent) ;
        showMonth(`month-${currentYear}-${currentMonth}`);
    }));

let monthYears = document.querySelectorAll('.daysCalendar caption');
console.log(Array.from(monthYears));
Array.from(monthYears)
    .forEach(e => e.addEventListener('click',() => {
        let sectionId = e.parentElement
            .parentElement.id;
        let year = sectionId.split('-')[1];
        displayYearSection(`year-${year}`);
    }));




