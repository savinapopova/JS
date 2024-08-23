export function modifyNav() {

    let loggedUserNav = document.getElementById('user');
    let guestUserNav = document.getElementById('guest');
    let isLoggedIn = sessionStorage.getItem('user') !== null;
    let emailSpan = document.querySelector('nav p span');

    if (isLoggedIn) {
        loggedUserNav.style.visibility = 'visible';
        guestUserNav.style.visibility = 'hidden';
        emailSpan.textContent = JSON.parse(sessionStorage.getItem('user')).email
    } else {
        loggedUserNav.style.visibility = 'hidden';
        guestUserNav.style.visibility = 'visible';
    }
}
