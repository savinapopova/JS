import {hideSections, showSection} from './sections.js';
import {getUrl} from "./utils/urls.js";
import {showNav} from "./nav.js";
import {showHome} from "./home.js";


export function showRegister() {
    hideSections();
    showSection('form-sign-up');
}

export async function registerUser(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let data = Object.fromEntries(formData.entries());

    let email = data.email.trim();
    let password = data.password.trim();
    let rePass = data.repeatPassword.trim();

    if (email === '') {
        return alert('Email cannot be empty!');
    }
    if (password.length < 6) {
        return alert('Password should be at least 6 characters long!');
    }
    if (password !== rePass) {
        return alert("Passwords should match!");
    }

    const url = getUrl('register');
    console.log(url);
    console.log(JSON.stringify({email, password}));

    try {
        let response = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        let user = await response.json();
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        event.target.reset();

       await showHome();


    } catch (e) {
        return alert(e.message);
    }


}
