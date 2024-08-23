export function modifyNav() {

    let loggedUserNav = document.getElementById('user');
    let guestUserNav = document.getElementById('guest');
    let isLoggedIn = sessionStorage.getItem('user') !== null;
    let emailSpan = document.querySelector('nav p span');

    let registerNavBtn = document.querySelector('#guest #register');
    let homeNavBtn = document.querySelector('#home');
    registerNavBtn.classList.add('active');
    homeNavBtn.classList.remove('active');
    let loginNavBtn = document.querySelector('#guest #login');
    console.log(loginNavBtn);

    if (window.location.pathname.endsWith('index.html') ) {
        homeNavBtn.classList.add('active');
        registerNavBtn.classList.remove('active');
        loginNavBtn.classList.remove('active');
    } else if (window.location.pathname.endsWith('register.html')) {
        homeNavBtn.classList.remove('active');
        registerNavBtn.classList.add('active');
        loginNavBtn.classList.remove('active');
    } else if (window.location.pathname.endsWith('login.html')){
        homeNavBtn.classList.remove('active');
        registerNavBtn.classList.remove('active');
        loginNavBtn.classList.add('active');
    }

    if (isLoggedIn) {
        loggedUserNav.style.visibility = 'visible';
        guestUserNav.style.visibility = 'hidden';
        emailSpan.textContent = JSON.parse(sessionStorage.getItem('user')).email
    } else {
        loggedUserNav.style.visibility = 'hidden';
        guestUserNav.style.visibility = 'visible';
    }
}
