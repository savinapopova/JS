import {put} from "./request.js";
import {loadBooks, renderPage} from "./render.js";
import {getUrl, showAddForm} from "./util.js";
import {getId} from "./state.js";

export async function editBook(event) {
    event.preventDefault();



    let formData = new FormData(event.target);
    let entries = Object.fromEntries(formData.entries());

    let title = entries.title.trim();
    let author = entries.author.trim();

    if (title === '' || author === '') {
        alert("All fields must be filled!");
        return;
    }

    await put(getUrl() + getId(), {title, author});

    showAddForm();
    await loadBooks();

}
