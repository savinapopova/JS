import {loadBooks, renderPage} from "./render.js";
import {addBook} from "./create.js";
import {editBook} from "./edit.js";

renderPage();



const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', loadBooks);

const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', addBook);


const editForm = document.getElementById('edit-form');
editForm.addEventListener('submit', editBook)









