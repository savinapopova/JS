export function showNav() {
        let userNav = document.querySelectorAll('.nav-item.user');
    let guestNav = document.querySelectorAll('.nav-item.guest');
    if (localStorage.user) {
        Array.from(userNav)
            .forEach(i => i.style.display = 'inline-block');
        Array.from(guestNav)
            .forEach(i => i.style.display = 'none');

        console.log(JSON.parse(localStorage.getItem('user')).email);

        document.getElementById('welcome-msg').textContent = `Welcome, ${JSON.parse(localStorage.getItem('user')).email}`;
    } else {
        Array.from(userNav)
            .forEach(i => i.style.display = 'none');
        Array.from(guestNav)
            .forEach(i => i.style.display = 'inline-block');
}
}



