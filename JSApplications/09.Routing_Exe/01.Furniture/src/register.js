import {getUrl, html, render} from "./lib.js";
import {post} from "./request.js";


export function showRegister(ctx) {
    const  registerTemplate = html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit="${(event) => onRegister(event, ctx)}">
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
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`;
    render(registerTemplate, ctx.root);
}

async function onRegister(event, ctx) {
    event.preventDefault();

    console.log("Form submitted!"); // Проверка дали се извиква

    let formData = new FormData(event.target);
    let entries = Object.fromEntries((formData.entries()));

    let email = entries.email.trim();
    let password = entries.password.trim();
    let rePass = entries.rePass.trim();

    console.log(email, entries, password);

    if (email === '' || password === '') {
        return alert("All fields must be filled!");
    }

    if (password !== rePass) {
        return alert("Passwords don't match!");
    }

    let user =  await post(getUrl().register,{email, password});
    sessionStorage.setItem("user", JSON.stringify(user));

    console.log('Ready!!');

    ctx.page.redirect('/');


}
