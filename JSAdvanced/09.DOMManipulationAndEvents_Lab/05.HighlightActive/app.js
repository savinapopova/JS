function focused() {
    let inputs = Array.from(document.querySelectorAll('input'))
        .map(i => {
            i.addEventListener('focus', addClass);
            i.addEventListener('blur', removeClass);
        });

    function addClass(event) {
        event.target.parentElement.classList.add('focused');
    }

    function removeClass(event) {
        event.target.parentElement.classList.remove('focused');
    }


}
