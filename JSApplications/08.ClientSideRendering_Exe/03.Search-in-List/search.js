import {html, render} from './node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';

const searchBtn = document.querySelector('button');
searchBtn.addEventListener("click", search);

show();

function show() {
    const root = document.getElementById('towns');
    const listTemplate = (towns) => html`
    <ul>${towns.map(t => html`<li>${t}</li>`)}</ul>
    `;
    render(listTemplate(towns), root);

}

function search() {
const resultDiv = document.getElementById('result');
let townNames = document.querySelectorAll('li');
const input = document.querySelector('input');
let target = input.value;

townNames
    .forEach(e => e.classList.remove('active'));

let matches = Array.from(townNames)
    .filter(e => e.textContent.includes(target))
    .map(e => e.classList.add('active'))
    .length;

resultDiv.textContent = `${matches} matches found`;
input.value = '';

}
