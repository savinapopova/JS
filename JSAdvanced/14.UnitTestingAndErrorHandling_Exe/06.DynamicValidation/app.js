function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', checkIfValid);

    function checkIfValid() {
        let pattern =/^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!input.value.match(pattern)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}
