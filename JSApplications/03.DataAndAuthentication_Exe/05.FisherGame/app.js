import {modifyNav} from "./modifyNav.js";

window.addEventListener('load', solve);

function solve() {
    modifyNav();

    let urls = {
        logout: 'http://localhost:3030/users/logout',
        catches: 'http://localhost:3030/data/catches/'
    };

    let logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click', logout);
    let loadBtn = document.querySelector('aside button.load');
    loadBtn.addEventListener('click', loadAllCatches);
    let catchesList = document.getElementById('catches');
    let addBtn = document.querySelector('#addForm button');
    if (sessionStorage.user) {
        addBtn.disabled = false;
    } else {
        addBtn.disabled = true;
    }
    let form = document.getElementById('addForm');
    form.addEventListener('submit', addCatch);


    async function loadAllCatches() {

        try {
            let response = await fetch(urls.catches);
            if (!response.ok) {
                let error = await response.json();
                throw new Error(error.message);
            }
            let data = await response.json();
            console.log(data);
            catchesList.innerHTML = '';
            data.forEach(e => catchesList.appendChild(createCatch(e)));
        } catch (error) {
            alert(error.message);
            return;
        }

    }

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
            modifyNav();
            window.location = 'index.html';


        } catch (err) {
            alert('Error: ' + err.message);
            return;
        }

    }

    function createCatch(element) {
        let div = document.createElement('div');
        div.innerHTML = '';
        div.classList.add('catch');
        addLabelAndInput('Angler', 'text', 'angler', element.angler);
        addLabelAndInput('Weight', 'text', 'weight', element.weight);
        addLabelAndInput('Species', 'text', 'species', element.species);
        addLabelAndInput('Location', 'text', 'location', element.location);
        addLabelAndInput('Bait', 'text', 'bait', element.bait);
        addLabelAndInput('Capture Time', 'number', 'captureTime', element.captureTime);
        let updateBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        updateBtn.dataset.id = element._id;
        updateBtn.classList.add('update');
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = element._id;
        deleteBtn.classList.add('delete');
        if (!sessionStorage.user || JSON.parse(sessionStorage.user)._id !== element._ownerId) {
            updateBtn.disabled = true;
            deleteBtn.disabled = true
        }
        div.appendChild(updateBtn);
        div.appendChild(deleteBtn);

        updateBtn.addEventListener('click', updateCatch);
        deleteBtn.addEventListener('click', deleteCatch);

        return div;

        function addLabelAndInput(labelText, type, clazz, value) {
            let label = document.createElement('label');
            label.textContent = labelText;
            div.appendChild(label);

            let input = document.createElement('input');
            input.type = type;
            input.classList.add(clazz);
            input.value = value;
            div.appendChild(input);
        }

    }

    async function addCatch(event) {
        event.preventDefault();

        let formData = new FormData(form);
        let newCatch = Object.fromEntries(formData.entries());
        console.log(newCatch);
        if (Object.values(newCatch).some(e => e.trim() === '')) {
            return alert('All fields are required!');
        }
        let angler = newCatch.angler.trim();
        let weight = newCatch.weight.trim();
        let species = newCatch.species.trim();
        let location = newCatch.location.trim();
        let bait = newCatch.bait.trim();
        let captureTime = newCatch.captureTime.trim();

        if (isNaN(parseInt(captureTime))) {
            alert('Capture Time must be a number!');
            return;
        }
        if (isNaN(parseFloat(weight))) {
            alert('Weight must be a number!');
            return;
        }

        let user = JSON.parse(sessionStorage.user);
        let _ownerId = user._id;
        let accessToken = user.accessToken;
        let body = JSON.stringify({angler, weight, species, location, bait, captureTime, _ownerId});

        try {
            let request = await fetch(urls.catches, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'X-Authorization': accessToken
                },
                body
            })
            if (!request.ok) {
                let error = await request.json();
                throw new Error(error.message);
            }
            form.reset();
            await loadAllCatches();
        } catch (error) {
            alert(error.message);
            return;
        }
    }

    async function updateCatch(event) {
        event.preventDefault();

        let updateForm = event.target.parentElement;
        let user = JSON.parse(sessionStorage.user);
        if (!user) {
            alert("No user logged in!");
            return;
        }
        let accessToken = user.accessToken;
        let id = event.target.dataset.id;

        let edited = {};
        Array.from(updateForm.querySelectorAll('input'))
            .forEach(i => {
                if (i.value.trim() === '') {
                    alert('All fields must be filled in!');
                    return;
                }

                edited[i.classList[0]] = i.value.trim();
            });
        console.log(edited);
        edited._ownerId = user._id;
        if (isNaN(parseInt(edited.captureTime))) {
            alert('Capture Time must be a number!');
            return;
        }
        if (isNaN(parseFloat(edited.weight))) {
            alert('Weight must be a number!');
            return;
        }

        try {
            let request = await fetch(urls.catches + id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'X-Authorization': accessToken
                },
                body: JSON.stringify(edited)
            });
            if (!request.ok) {
                let error = await request.json();
                throw new Error(error.message);
            }
            await loadAllCatches();
        } catch (error) {
            alert(error.message);
            return;
        }
    }

    async function deleteCatch(event) {
        let user = JSON.parse(sessionStorage.user);
        if (!user) {
            alert("No user logged in!")
            return;
        }
        let accessToken = user.accessToken;
        let id = event.target.dataset.id;

        try {
            let request = await fetch(urls.catches + id, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': accessToken
                }
            });
            if (!request.ok) {
                let error = await request.json();
                throw new Error(error.message);
            }
            await loadAllCatches();
        } catch (error) {
            alert(error.message);
            return;
        }
    }

}







