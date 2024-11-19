import {cats} from "./catSeeder.js";
import {html, render} from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById('allCats');

const cardTemplate = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
`;

const listTemplate = (cats) => html`
<ul>${cats.map(cardTemplate)}</ul>`;


start();

root.addEventListener('click',showInfo)

function showInfo(event) {
    if (event.target.tagName !== 'BUTTON' || event.target.className !== 'showBtn') {
        return;
    }
    const details = event.target.parentNode.querySelector('.status');
    if (details.style.display === 'none') {
        details.style.display = 'block';
        event.target.textContent = 'Hide status code';
    } else {
        details.style.display = 'none';
        event.target.textContent = 'Show status code';
    }
}

function start() {
    render(listTemplate(cats), root);
}
