import {setNav} from "../views/nav.js";
import {page} from "../api/lib.js";
import {showHome} from "../views/home.js";
import {showLogin} from "../views/login.js";
import {showRegister} from "../views/register.js";
import {showBrowse} from "../views/browse.js";
import {showDetails} from "../views/details.js";

page('/', middleware, showHome);
page('/login', middleware, showLogin);
page('/register', middleware, showRegister);
page('/browse', middleware, showBrowse);
page('/details/:id', middleware, showDetails);

page();
function middleware(ctx, next) {
    ctx.root = document.querySelector('main');
    setNav();
    next();
}
