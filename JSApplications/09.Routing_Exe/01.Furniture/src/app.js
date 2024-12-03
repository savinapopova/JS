import {page} from "./lib.js";
import {setNav} from "./nav.js";
import {showRegister} from "./register.js";
import {showDashboard} from "./dashboard.js";
import {logout, showLogin} from "./login.js";
import {showCreate} from "./create.js";
import {showDetails} from "./details.js";

document.getElementById('logoutBtn').addEventListener('click', logout);

page('/', ctxDecoration, showDashboard);
page('/register',ctxDecoration, showRegister);
page('/login',ctxDecoration, showLogin);
page('/create', ctxDecoration, showCreate);
page('/details/:id', ctxDecoration, showDetails);




function ctxDecoration(ctx, next) {
    ctx.root = document.querySelector('.container');
    setNav();
    next();
}

setNav();

page.start();
