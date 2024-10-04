import {hideSections, showSection} from "./sections.js";
import {getUrl} from "./utils/urls.js";
import {showHome} from "./home.js";
import {showDetails} from "./movie.js";

export async function showMovies() {
    showSection('movie');

    let list = document.getElementById('movies-list');
    console.log(list);
    list.innerHTML = '';

    let url = getUrl('getAllMovies');
    console.log(url);

    try {
        let request = await fetch(url);
        if (!request.ok) {
            let error = await request.json();
            throw new Error(error.message);
        }
        let data = await request.json();

        let movies = Object.values(data);
        console.log(movies);

        movies
            .forEach(m => list.appendChild(createElement(m)));


    } catch (e) {
        return alert(e.message);
    }
}

export function showAddMovie() {
    hideSections();
    showSection('add-movie');
}

export async function addMovie(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    let title = data.title.trim();
    let description = data.description.trim();
    let img = data.img.trim();

    if (title === '' || description === '' || img === '') {
        return alert("All fields should be filled!");
    }

    let url = getUrl('add');
    let _ownerId = JSON.parse(localStorage.user)._id;
    console.log(localStorage.user.accessToken);

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.user).accessToken
            },
            body: JSON.stringify({title, description, img, _ownerId})
        });

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        console.log(await response.json());
        await showHome();

        event.target.reset();
    } catch (e) {
        return alert(e.message);
    }
}



function createElement(movie) {
    let li = document.createElement('li');
    li.classList.add('card', 'mb-4');
    li.dataset.id = movie._id;
    li.dataset.ownerId = movie._ownerId;

    let img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = movie.img;
    img.alt = "Card image cap";
    img.width = 400;
    li.appendChild(img)

    let bodyDiv = document.createElement('div');
    bodyDiv.classList.add('card-body');
    li.appendChild(bodyDiv);

    let h4 = document.createElement('h4');
    h4.classList.add('card-title');
    h4.textContent = movie.title;
    bodyDiv.appendChild(h4);

    let a = document.createElement('a');
    a.href = '#';
    bodyDiv.appendChild(a);

    let footerDiv = document.createElement('div');
    footerDiv.classList.add('card-footer');
    li.appendChild(footerDiv);

    let btn = document.createElement('button');
    btn.classList.add('btn', 'btn-info');
    btn.type = 'button';
    btn.textContent = 'Details';
    footerDiv.appendChild(btn);
    if (!localStorage.user) {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

    btn.addEventListener('click', () => showDetails(movie));

    return li;
}
