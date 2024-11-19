import { html, render } from './node_modules/lit-html/lit-html.js';
import { get, post } from './request.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const select = document.getElementById('menu');
const form = document.querySelector('form');
form.addEventListener("submit", addItem);

await loadOptions();

async function loadOptions() {


     let data = await get(url);
     console.log(data);

     let optionsTemplate = Object.values(data)
         .map(d => html`<option value="${d._id}">${d.text}</option>`);
     render(optionsTemplate, select);

}

async function addItem(event) {
    event.preventDefault();
const input = document.getElementById('itemText');
let text = input.value.trim();
if (text === '') {
    alert("No text inserted");
    return;
}
    await post(url, {text});
    input.value = '';
    await loadOptions();

}


