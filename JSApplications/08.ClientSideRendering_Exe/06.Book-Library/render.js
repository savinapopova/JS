
import {get} from "./request.js";
import {getRoot, getUrl, html, render, showEditForm} from "./util.js";
import {deleteBook} from "./delete.js";
import {getId, setId} from "./state.js";

let books;

export function renderPage() {


    const page = html`<button id="loadBooks">LOAD ALL BOOKS</button>

    <table>
         <thead>
         <tr>
             <th>Title</th>
             <th>Author</th>
             <th>Action</th>
         </tr>
         </thead>
         <tbody>
         </tbody>
     </table>
     <form id="add-form">
         <h3>Add book</h3>
         <label>TITLE</label>
         <input type="text" name="title" placeholder="Title...">
         <label>AUTHOR</label>
         <input type="text" name="author" placeholder="Author...">
         <input type="submit" value="Submit">
     </form>

     <form id="edit-form">
         <input type="hidden" name="id">
         <h3>Edit book</h3>
         <label>TITLE</label>
         <input type="text" name="title" placeholder="Title...">
         <label>AUTHOR</label>
         <input type="text" name="author" placeholder="Author...">
         <input type="submit" value="Save">
     </form>`;
    render(page, getRoot());
    const editForm = document.getElementById('edit-form');
    editForm.style.display = 'none';

}

export async function loadBooks() {
books = await get(getUrl());
console.log(books);

let rowTemplate = ([id, book]) => html`
    <tr data-id=${id}>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button >Edit</button>
            <button>Delete</button>
        </td>
    </tr>`;
let rows = Object.entries(books).map(rowTemplate);
let table = document.querySelector('tbody')
render(rows, table);

    let deleteButtons = Array.from(document.querySelectorAll('button'))
        .filter(b => b.textContent === 'Delete');

    console.log(deleteButtons);
    deleteButtons.forEach(b => b.addEventListener('click', deleteBook));

    let editButtons = Array.from(document.querySelectorAll('button'))
        .filter(b => b.textContent === 'Edit');
    editButtons.forEach(b => b.addEventListener('click', renderEditForm));

}

function renderEditForm(event) {
    const editForm = document.getElementById('edit-form');

    setId(event.target.parentElement.parentElement.dataset.id);
    let book = books[getId()];

    showEditForm();


    editForm.querySelector('input[name="title"]').value = book.title;
    editForm.querySelector('input[name="author"]').value = book.author;

}
