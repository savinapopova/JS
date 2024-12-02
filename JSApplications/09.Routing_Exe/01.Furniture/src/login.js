import {getUrl, html, render, page} from "./lib.js";
import {get, post} from "./request.js";



export function showLogin(ctx) {
    const loginTemplate = html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Login User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${(event) => onLogin(event, ctx)}">
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <input type="submit" class="btn btn-primary" value="Login" />
            </div>
        </div>
    </form>
`;
    render(loginTemplate, ctx.root);
}

async function onLogin(event,ctx) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let entries = Object.fromEntries(formData.entries());

    let email = entries.email.trim();
    let password = entries.password.trim();

    let user = await post(getUrl().login, {email, password});
    sessionStorage.setItem('user', JSON.stringify(user));
    ctx.page.redirect('/');
}

export async function logout() {
await get(getUrl().logout, JSON.parse(sessionStorage.getItem('user')).accessToken);
sessionStorage.clear();
page.redirect('/');
}
