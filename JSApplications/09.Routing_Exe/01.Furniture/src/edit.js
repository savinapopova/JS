import {getUrl, html, render} from "./lib.js";
import {get, post, put} from "./request.js";
import {validateEntries} from "./create.js";



export async function showEdit(ctx) {
    let id = ctx.params.id;

    let item = await get(getUrl().catalog + id);
    console.log(item);

    const editTemplate = (item) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit="${(event)=>onEdit(event,ctx)}">
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="${item.make}">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" value="${item.model}">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" value="${item.year}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="${item.description}">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="${item.price}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="${item.img}">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="${item.material}">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
    `;

    render(editTemplate(item), ctx.root);
}

async function onEdit(event, ctx) {
    event.preventDefault();

    console.log(event);

    let id = ctx.params.id;
    console.log(id);

let formData = new FormData(event.target);
let entries = Object.fromEntries(formData.entries());

console.log(entries);

    let body = validateEntries(entries);

    console.log(body);

    if (body) {
        await put(getUrl().catalog + id, body, JSON.parse(sessionStorage.getItem('user')).accessToken);
        ctx.page.redirect('/');
    }



}
