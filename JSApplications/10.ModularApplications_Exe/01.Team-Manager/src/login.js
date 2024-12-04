import {getUrl, html, render, page} from "./lib.js";
import {post} from "./request.js";

const loginTemplate = (ctx) => html`
        <section id="login">
                            <article class="narrow">
                                <header class="pad-med">
                                    <h1>Login</h1>
                                </header>
                                <form @submit="${(event) => onLogin(event, ctx)}" id="login-form" class="main-form pad-large">
                                    ${ctx.error ? html`<div class="error">${ctx.error.message}</div>` : ''}
                                    <label>E-mail: <input type="text" name="email"></label>
                                    <label>Password: <input type="password" name="password"></label>
                                    <input class="action cta" type="submit" value="Sign In">
                                </form>
                                <footer class="pad-small">Don't have an account? <a href="#" class="invert">Sign up here</a>
                                </footer>
                            </article>
                        </section>
    `;


export function showLogin(ctx) {
    render(loginTemplate(ctx), ctx.root);
}

async function onLogin(event, ctx) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let entries = Object.fromEntries(formData.entries());

    let email = entries.email.trim();
    let password = entries.password.trim();

    if (!email || !password) {
        ctx.error = {message: 'All fields are required!'}
        render(loginTemplate(ctx), ctx.root);
        return;
    }

    try {
        ctx.error = null;
        let user = await post(getUrl().login, {email, password});
        if (!user) {
            throw new Error('Invalid server response. Please try again.');
        }
        sessionStorage.setItem('user', JSON.stringify(user));
        page.redirect('/');
    } catch (e) {
        ctx.error = { message: e.message || 'Login failed!' };;
        console.log(e);
        render(loginTemplate(ctx), ctx.root);
        return;
    }
}


