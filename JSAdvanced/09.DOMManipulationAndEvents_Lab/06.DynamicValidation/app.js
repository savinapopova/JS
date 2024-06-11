function validate() {
    let inputField = document.getElementById('email');

    inputField.addEventListener('change', validateEmail);

    function validateEmail() {
        let email = inputField.value;

        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/gm;

        if (!email.match(pattern)) {
            inputField.classList.add('error');
        } else {
            inputField.classList.remove('error');
        }
    }
}
