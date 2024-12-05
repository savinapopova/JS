import {getUrl, html, render, page} from "../api/lib.js";
import {post} from "../api/request.js";

const registerTemplate = (ctx) => html`
                <section id="register">
                    <article class="narrow">
                        <header class="pad-med">
                            <h1>Register</h1>
                        </header>
                        <form @submit ="${(event) => onRegister(event, ctx)}"id="register-form" class="main-form pad-large">
                            ${ctx.error 
                                    ? html`<div class="error">${ctx.error.message}</div>`
                                    : ""
                              }
                            
                            <label>E-mail: <input type="text" name="email"></label>
                            <label>Username: <input type="text" name="username"></label>
                            <label>Password: <input type="password" name="password"></label>
                            <label>Repeat: <input type="password" name="repass"></label>
                            <input class="action cta" type="submit" value="Create Account">
                        </form>
                        <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
                        </footer>
                    </article>
                </section>
`;

export function showRegister(ctx) {
    render(registerTemplate(ctx), ctx.root);

}

export async function onRegister(event, ctx) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let entries = Object.fromEntries(formData.entries());

   let body = validateRegister(entries, ctx);

    if (body) {
        console.log(body);
        try {
            ctx.error = null;
            let user = await post(getUrl().register, body);
            if (!user) {
                throw new Error('Invalid server response. Please try again.');
            }
            sessionStorage.setItem('user', JSON.stringify(user));
            page.redirect('/');
        } catch (e) {
            ctx.error = { message: e.message || 'Register failed!' };;
            console.log(e);
            render(registerTemplate(ctx), ctx.root);
            return;
        }
    }

}

function validateRegister(entries, ctx) {
    let email = entries.email.trim();
    let username = entries.username.trim();
    let password = entries.password.trim();
    let repass = entries.repass.trim();

    if (!email || !username || !password || !repass) {
        ctx.error = {message: 'All fields are required!'}
        render(registerTemplate(ctx), ctx.root);
        return;
    }

    if (!validateEmail(email)) {
        ctx.error = {message: 'Invalid email!'}
        render(registerTemplate(ctx), ctx.root);
        return;
    }
    if (username.length < 3) {
        ctx.error = {message: 'Username must be at least 3 characters long!'}
        render(registerTemplate(ctx), ctx.root);
        return;
    }
    if (password.length < 3) {
        ctx.error = {message: 'Password must be at least 3 characters long!'}
        render(registerTemplate(ctx), ctx.root);
        return;
    }
    if (password !== repass) {
        ctx.error = {message: 'Passwords don\'t match!'}
        render(registerTemplate(ctx), ctx.root);
        return;
    }

    return {email, username, password};
}

function validateEmail(email) {
    // Регулярен израз за проверка на e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
