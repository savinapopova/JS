import {setNav} from "./nav.js";
import {page} from "./lib.js";
import {showHome} from "./home.js";
import {showLogin} from "./login.js";
import {showRegister} from "./register.js";

page('/', middleware, showHome);
page('/login', middleware, showLogin);
page('/register', middleware, showRegister);

page();
function middleware(ctx, next) {
    ctx.root = document.querySelector('main');
    setNav();
    next();
}
