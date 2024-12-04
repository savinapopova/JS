
import {contacts} from "../contacts.js";
import {html, render} from "../node_modules/lit-html/lit-html.js"



const cardTemplate = (data) => html`<div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${data.name}</h2>
                <button class="detailsBtn">Details</button>
                <div class="details" id=${data.id}>
                    <p>Phone number: ${data.phoneNumber}</p>
                    <p>Email: ${data.email}</p>
                </div>
            </div>
        </div>
        `;

start();

function start() {
    const root = document.getElementById('contacts');
    root.addEventListener('click',onClick)
    console.log(contacts);
    const result = contacts.map(cardTemplate);
    render(result, root);
}

function onClick(event) {
    if (event.target.tagName !== 'BUTTON' || event.target.className !== 'detailsBtn') {
        return;
    }
    const element = event.target.parentNode.querySelector('.details');
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }

}