import {getUrl, html, render} from "./lib.js";
import {get} from "./request.js";

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
                    <a href=”/details/${piece._id}” class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>
`;

const dashboardTemplate = (furniture) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        ${Object.values(furniture).map(furnitureCard)}
    </div>`;



export async function showDashboard(ctx) {
let furniture = await get(getUrl().catalog);
console.log(furniture);
render(dashboardTemplate(furniture), ctx.root);
}
