import {html, render} from "./lib.js";
import {get} from "./request.js";

export async function showMyFurniture(ctx) {

    let url = `http://localhost:3030/data/catalog?where=_ownerId%3D%22${JSON.parse(sessionStorage.getItem('user'))._id}%22`;

    let furniture = await get(url);

    const myFurnitureTemplate = (furniture) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${Object.values(furniture).map(furnitureCard)}
        </div>
    `;

    const furnitureCard = (piece) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src="${piece.img}" />
                <p>${piece.description}</p>
                <footer>
                    <p>Price: <span>${piece.price} $</span></p>
                </footer>
                <div>
                    <a href=details/${piece._id} class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`;
    render(myFurnitureTemplate(furniture), ctx.root);

}
