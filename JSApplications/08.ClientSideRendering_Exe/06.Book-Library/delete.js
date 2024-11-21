import {getUrl} from "./util.js";
import {del} from "./request.js";
import {loadBooks} from "./render.js";

export async function deleteBook(event) {
    let id = event.target.parentElement.parentElement.dataset.id;
    console.log(id);

    await del(getUrl() + id);

    await loadBooks();
}
