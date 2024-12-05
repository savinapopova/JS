import {setNav} from "./nav.js";
import {page} from "./lib.js";
import {showHome} from "./home.js";
import {showLogin} from "./login.js";
import {showRegister} from "./register.js";
import {showBrowse} from "./browse.js";

page('/', middleware, showHome);
page('/login', middleware, showLogin);
page('/register', middleware, showRegister);
page('/browse', middleware, showBrowse);

page();
function middleware(ctx, next) {
    ctx.root = document.querySelector('main');
    setNav();
    next();
}
