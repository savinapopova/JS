import {modifyNav} from "./modifyNav.js";

window.addEventListener('load', solve);

function solve() {

modifyNav();

let form = document.querySelector('form');

form.addEventListener('submit', onRegister);



async function onRegister(event) {
    event.preventDefault();

    let url = 'http://localhost:3030/users/register';

    let formData = new FormData(form);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repass = formData.get('rePass').trim();

    if (!email || !password || !repass) {
        return alert('All fields are required!');
    }
    if (password !== repass) {
        return alert('Passwords don\'t match!');
    }

    try {
        let request = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        if (!request.ok) {
            let error = await request.json();
            throw new Error(error.message);
        }
        let user = await request.json();
        console.log(user);
        form.reset();
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location = 'index.html';
    } catch (error) {
        alert('Error: ' + error.message);
        return;
    }
}
}



