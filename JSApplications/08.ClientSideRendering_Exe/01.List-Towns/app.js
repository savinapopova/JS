import {html, render} from "./node_modules/lit-html/lit-html.js";

const input = document.getElementById('towns');
const loadBtn = document.getElementById('btnLoadTowns');
const  root = document.getElementById('root');

loadBtn.addEventListener('click', showCities);

let cities;

const listTemplate = (cities) => html`
    <ul>
        ${cities.map(t => html`<li>${t}</li>`)}
    </ul>
`;

function showCities(event) {
    cities = input.value.split(/\s*,\s*/);
    console.log(cities);
    render(listTemplate(cities), root);
    input.value = '';
}
