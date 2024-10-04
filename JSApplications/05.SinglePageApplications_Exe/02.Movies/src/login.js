import {hideSections, showSection} from "./sections.js";
import {getUrl} from "./utils/urls.js";
import {showHome} from "./home.js";

export function showLogin() {
    hideSections();
    showSection('form-login');
}

export async function loginUser(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    let email = data.email.trim();
    let password = data.password.trim();
    console.log(email);
console.log(password);

    if (email === '' || password === '') {
        return alert("All fields must be filled!");
    }

    let url = getUrl('login');

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        let user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        event.target.reset();
        await showHome();
    } catch (e) {
        return alert(e.message);
    }

}
