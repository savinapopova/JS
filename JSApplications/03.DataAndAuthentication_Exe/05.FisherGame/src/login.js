import {modifyNav} from "./modifyNav.js";

modifyNav();

let form = document.querySelector('form');
form.addEventListener('submit', login);


export async function login() {
    let url = 'http://localhost:3030/users/login';


    let formData = new FormData(form);
    let email = formData.get('email').trim();
    let password = formData.get('password').trim();

    if (!email || !password) {
        return alert('All fields are required!');
    }

    try {
        let request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        if (!request.ok) {
            let error = await request.json();
            return alert(error.message);
        }
        let user = await request.json();
        sessionStorage.setItem('user', JSON.stringify(user));
        console.log(sessionStorage.getItem('user'));
        window.location = 'index.html';
    } catch (error) {
        alert('Error: ' + error.message);
    }
}
