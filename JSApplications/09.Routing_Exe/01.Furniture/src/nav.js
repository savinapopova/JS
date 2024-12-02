

const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

export function setNav() {

    const user = sessionStorage.getItem('user')
    if (!user) {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    } else {
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    }
}


