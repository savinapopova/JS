function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/phonebook';
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');
    console.log(createBtn);
    let numbersList = document.getElementById('phonebook');
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');


    loadBtn.addEventListener('click', loadPhonebook);
    createBtn.addEventListener('click', addNumber);

    async function loadPhonebook(event) {

        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error("No response");
            }
            let data = await response.json();
            let phonebook = Object.values(data);
            console.log(phonebook);
            numbersList.innerHTML = '';

            phonebook.forEach(e => numbersList.appendChild(createEntry(e)));
        } catch (error) {
            alert(error.message);
        }
    }

    function createEntry(element) {
        let li = document.createElement('li');
        li.textContent = `${element.person}: ${element.phone}`;
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.id = element._id;
        deleteBtn.addEventListener('click', deleteEntry);
        li.appendChild(deleteBtn);
        return li;
    }

    async function deleteEntry(event) {
        try {
            let request = await fetch(`${url}/${event.target.id}`, {
                method: 'DELETE'
            });
            if (!request.ok) {
                throw new Error("No response");
            }
            let data = await request.json();
            console.log(data);
        } catch (error) {
            alert(error.message);
        }
        await loadPhonebook(event);
    }

    async function addNumber(event) {
        event.preventDefault()

        let person = personInput.value.trim();
        let phone = phoneInput.value.trim();

        if (person === '' || phone === '') {
            alert("Please fill all fields");
            return;
        }

        try {
            let request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({person, phone})
            });
            if (!request.ok) {
                throw new Error("No response");
            }
        } catch (error) {
            alert(error.message);
        }
        personInput.value = '';
        phoneInput.value = '';
        await loadPhonebook(event);
    }


}

attachEvents();
