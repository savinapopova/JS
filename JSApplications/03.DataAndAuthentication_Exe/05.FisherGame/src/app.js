import {modifyNav} from "./modifyNav.js";

modifyNav();

let urls = {
    logout: 'http://localhost:3030/users/logout',
};

let logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logout);

async function logout() {
    let isLoggedIn = sessionStorage.getItem('user') !== null;

    if (!isLoggedIn) {
        alert("No user logged in!");
        return;
    }

    try {
        let request = await fetch(urls.logout, {
            method: 'GET',
            headers: {
                'X-Authorization': JSON.parse(sessionStorage.getItem('user')).accessToken
            }
        });

        if (!request.ok) {
            let error = await request.json();
            return alert(error.message);
        }
        sessionStorage.clear();
        window.location = 'login.html';
    } catch (err) {
        alert('Error: ' + err.message);
    }
}
