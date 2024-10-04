import {getUrl} from "./utils/urls.js";
import {showLogin} from "./login.js";
import {showNav} from "./nav.js";

export async function logout() {
    let url = getUrl('logout');

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        localStorage.clear();
        showLogin();
        showNav();
    } catch (e) {
        return alert(e.message);
    }
}
