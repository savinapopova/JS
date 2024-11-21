import {html, render} from "./node_modules/lit-html/lit-html.js";

function getUrl() {
    return 'http://localhost:3030/jsonstore/collections/books/'
}

function getRoot() {
    return document.querySelector('body');
}

function showAddForm() {
    const addForm = document.getElementById('add-form');
    const editForm = document.getElementById('edit-form');

        addForm.style.display = 'block';
        editForm.style.display = 'none';

}

function showEditForm() {
    const addForm = document.getElementById('add-form');
    const editForm = document.getElementById('edit-form');

        addForm.style.display = 'none';
        editForm.style.display = 'block';
}



export {
    html,
    render,
    getUrl,
    getRoot,
    showAddForm,
    showEditForm
}
