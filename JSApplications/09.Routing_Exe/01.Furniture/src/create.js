import {html, render} from "./lib.js";


export function showCreate(ctx) {

    const createTemplate = html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit ="${(event) => onCreate(event, ctx)}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control valid" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control is-valid" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control is-invalid" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>
`;
    render(createTemplate, ctx.root);
}

function onCreate(event, ctx) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let entries = Object.fromEntries(formData.entries());

    console.log(entries);

    let body = validateEntries(entries);

}

function validateEntries(entries) {
    let make = entries.make.trim();
    if (make < 4) {
        return alert('Make must be at least 4 characters long');
    }
    let model = entries.model.trim();
    if (model < 4) {
        return alert('Model must be at least 4 characters long');
    }
    let year = Number(entries.year.trim());
    if (year < 1950 || year > 2050) {
        return alert('Year must be between 1950 and 2050');
    }
    let description = entries.description.trim();
    if (description < 10) {
        return alert('Description must be at least 10 characters long');
    }
    let price = Number(entries.price.trim());
    if (price <= 0) {
        return alert('Price must be a positive number');
    }
    let img = entries.img.trim();
    if (img === '') {
        return alert('Image URL is required');
    }
    let material = entries.material.trim();

    return {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    };


}

