import {getUrl, html, render} from "./lib.js";
import {del, get} from "./request.js";

export async function showDetails(ctx) {
    let id = ctx.params.id;
    console.log(id);
    let item = await get(getUrl().catalog + id);
    console.log(item);

    const detailsTemplate = (item) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${item.img[0] === '.'
    ? `.${item.img}`
    : `${item.img}`}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>
                ${item._ownerId === JSON.parse(sessionStorage.getItem('user'))._id 
                        ? html`
                    <div>
                        <a href=”#” class="btn btn-info">Edit</a>
                        <a @click = "${(event)=> onDelete(event, item._id, ctx)}" href=”javascript:void(0)” class="btn btn-red">Delete</a>
                    </div>
                `
    :``}
                
            </div>
        </div>
    `;
    render(detailsTemplate(item), ctx.root);
}

async function onDelete(event, id, ctx) {
    event.preventDefault();
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
        await del(getUrl().catalog + id,JSON.parse(sessionStorage.getItem('user')).accessToken);
        console.log("Redirecting to dashboard...");
        ctx.page.redirect('/');
    }
}
