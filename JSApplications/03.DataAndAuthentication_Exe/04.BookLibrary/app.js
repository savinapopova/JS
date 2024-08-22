function solve() {

    let url = 'http://localhost:3030/jsonstore/collections/books/';
    let loadBtn = document.getElementById('loadBooks');
    let table = document.querySelector('tbody');
    let form = document.querySelector('form');
    let formTitle = document.querySelector('form h3');
    let formBtn = document.querySelector('form button');
    let titleInput = document.querySelector('form input[name="title"]');
    let authorInput = document.querySelector('form input[name="author"]');

    loadBtn.addEventListener('click', loadBooks);
    form.addEventListener('submit', handleBook);

    async function handleBook(event) {
        event.preventDefault();

        let formData = new FormData(form);

        let {title, author} = Object.fromEntries(formData.entries());
        title = title.trim();
        author = author.trim();

        if (!title || !author) {
            alert("All fields must be filled!");
            return;
        }


        let body = {title, author};
        let request

        try {
            if (formBtn.textContent === "Submit") {
                request = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
            } else {

                request = await fetch(url + form.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
                formTitle.textContent = 'FORM'
                formBtn.textContent = 'Submit';
                form.id = '';
            }
            if (!request.ok) {
                throw new Error("No data sent!");
            }
            form.reset();
            await loadBooks();
        } catch (error) {
            alert(error.message);
        }

    }

    async function loadBooks() {

        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error("No data!");
            }
            let data = await response.json();
            let books = Object.entries(data);
            console.log(books);
            table.innerHTML = '';
            books.forEach(b => table.appendChild(createRow(b)));
        } catch (error) {
            alert(error.message);
        }


    }

    function createRow(book) {
        let row = document.createElement('tr');
        row.appendChild(createField(book[1].title));
        row.appendChild(createField(book[1].author));
        row.id = book[0];
        let btnField = document.createElement('td');
        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        btnField.appendChild(editBtn);
        btnField.appendChild(deleteBtn);
        row.appendChild(btnField);

        editBtn.addEventListener('click', updateBook);
        deleteBtn.addEventListener('click', deleteBook);

            return row;
    }

    function createField(property) {
        let field = document.createElement('td');
        field.textContent = property;
        return field;
    }

    async function deleteBook(event) {
        let row = event.target.parentElement.parentElement;

        try {
            let request = await fetch(url + row.id, {
                method: "DELETE"
            });
            if (!request.ok) {
                throw new Error("Cannot delete the data!");
            }
           await loadBooks();
        } catch (error) {
            alert(error.message);
        }
    }

    function updateBook(event) {
        formTitle.textContent = 'Edit FORM'
        formBtn.textContent = 'Save';
        let row = event.target.parentElement.parentElement;
        let title = row.children[0].textContent;
        let author = row.children[1].textContent;
        titleInput.value = title;
        authorInput.value = author;
        form.id = row.id;

    }
}

solve();
