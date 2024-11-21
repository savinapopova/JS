import {post} from "./request.js";
import {getUrl} from "./util.js";
import {loadBooks} from "./render.js";

export async function addBook(event) {

    event.preventDefault();

    let formData = new FormData(event.target);

    let entries = Object.fromEntries(formData.entries());
    let author = entries.author.trim();
    let title = entries.title.trim();

    if (author === '' || title === '') {
        alert("All Fields must be filled");
        return;
    }

    await post(getUrl(), {title, author });
    event.target.reset();
    await loadBooks();
}
