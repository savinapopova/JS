import {hideSections, showSection} from "./sections.js";
import {getUrl} from "./utils/urls.js";
import {showHome} from "./home.js";

export async function showDetails(movie) {
    hideSections();
    showSection('movie-example');
    document
        .querySelector('#movie-example h1')
        .textContent = `Movie title: ${movie.title}`;
    document
        .querySelector('#movie-example img')
        .src = movie.img;
    document
        .querySelector('#movie-example p')
        .textContent = movie.description;

    let deleteBtn = document
        .querySelector('#movie-example a:first-of-type');
    let editBtn = document
        .querySelector('#movie-example a:nth-of-type(2)');
    let likeBtn = document
        .querySelector('#movie-example a:nth-of-type(3)');
    let likesSpan = document
        .querySelector('#movie-example span');

    let userId = JSON.parse(localStorage.getItem('user'))
        ._id;
    if (userId === movie._ownerId) {
        deleteBtn.style.display = 'inline-block';
        editBtn.style.display = 'inline-block';
        likeBtn.style.display = 'none';
        likesSpan.style.display = 'none';

        editBtn.addEventListener('click', () =>
            showEditMovie(movie));
        deleteBtn.addEventListener('click', () => deleteMovie(movie));
    } else {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';

        let likes = await checkLikes(movie);

        if (likes > 0) {
            likeBtn.style.display = 'none';
            likesSpan.style.display = 'inline-block';
            likesSpan.textContent = `Liked ${likes}`;
        } else {
            likeBtn.style.display = 'inline-block';
            likesSpan.style.display = 'none';
        }

        likeBtn.addEventListener('click', () => likeMovie(movie));
    }
}

function showEditMovie(movie) {
    hideSections();
    showSection('edit-movie');

    document
        .querySelector('#edit-movie #title')
        .value = movie.title;

    document
        .querySelector('#edit-movie textarea')
        .textContent = movie.description;
    document
        .querySelector('#edit-movie #imageUrl')
        .value = movie.img;

    let editForm = document
        .querySelector('#edit-movie form');
    editForm
        .addEventListener('submit', (e) => editMovie(e, movie));

}

async function editMovie(event, movie) {
    event.preventDefault();

    let formData = new FormData(event.target);

    let data = Object.fromEntries(formData.entries());

    let title = data.title.trim();
    let description = data.description.trim();
    let img = data.img.trim();

    if (title === '' || description === '' || img === '') {
        return alert("All fields must be filled!");
    }

        let editedMovie = {title, description, img};

        let url = getUrl('edit') + movie._id;

        try {
            let response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(localStorage.user).accessToken
                },
                body: JSON.stringify(editedMovie)
            });

            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.message);
            }

            movie = await response.json();

            console.log('Latest: ' + movie);

            await showDetails(movie);
        } catch (e) {
            return alert(e.message);
        }
}

async function deleteMovie(movie) {
    let url = getUrl('delete') + movie._id;

    try {
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'X-Authorization': JSON.parse(localStorage.getItem('user'))
                    .accessToken
            }
        });
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        await showHome();
    } catch (e) {
        return alert(e.message);
    }
}

async function likeMovie(movie) {
    let url = getUrl('like');

    let body = {
        movieId: movie._id
    };

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.getItem('user'))
                    .accessToken
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }
        let data = await response.json();
        console.log('Response from like: ' + data);
        await showDetails(movie);
    } catch (e) {
        return alert(e.message);
    }
}

async function checkLikes(movie) {
    let url = getUrl('like') + `?where=movieId%3D%22${movie._id}%22%20and%20_ownerId%3D%22${JSON.parse(localStorage.getItem('user'))._id}%22`;

    try {
        let response = await fetch(url, {
            headers: {
                'X-Authorization': JSON.parse(localStorage.getItem('user')).accessToken
            }
        });

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        let data = await response.json();
        console.log('Response from checkIfLiked: ' + data);
        return data.length;
    } catch (e) {
        return alert(e.message);
    }
}
