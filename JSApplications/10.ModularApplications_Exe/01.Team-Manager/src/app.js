import {setNav} from "./nav.js";
import {page} from "./lib.js";
import {showHome} from "./home.js";

page('/', middleware, showHome);

page();
function middleware(ctx, next) {
    ctx.root = document.querySelector('main');
    setNav();
    next();
}
