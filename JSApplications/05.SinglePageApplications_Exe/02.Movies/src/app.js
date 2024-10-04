
import {registerUser, showRegister} from "./register.js";
import {loginUser, showLogin} from "./login.js";
import {showHome} from "./home.js";
import {logout} from "./logout.js";
import {addMovie, showAddMovie} from "./movies.js";

await showHome();

const registerBtn = document
    .querySelector('nav li:nth-of-type(4) a');
console.log(registerBtn);
registerBtn.addEventListener('click', showRegister);

const registerForm = document
    .getElementById('register-form');

registerForm.addEventListener('submit', registerUser);

const loginBtn = document
    .querySelector('nav li:nth-of-type(3)');
loginBtn.addEventListener('click', showLogin);

let loginForm = document
    .getElementById('login-form');
console.log(loginForm);
loginForm.addEventListener('submit', loginUser);

const logoutBtn = document
    .querySelector('nav li:nth-of-type(2)');
logoutBtn.addEventListener('click', logout);

const homeBtn = document
    .querySelector('nav a');
console.log(homeBtn);
homeBtn.href = '#';
homeBtn.addEventListener('click', await showHome);

const addMovieBtn = document.querySelector('#add-movie-button a');
addMovieBtn.addEventListener('click', showAddMovie);

const addMovieForm = document
    .getElementById('add-movie-form');
addMovieForm.addEventListener('submit', addMovie);
