function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    buttons
        .forEach(b => b.addEventListener('click', manageInfo));

    function manageInfo(event) {
        let btn = event.target;
        let lock = btn.parentElement
            .querySelector('[value = "lock"]');

        if (lock.checked) {
            return;
        }
        let hiddenInfo = btn
            .parentElement
            .querySelector('div');
        if (btn.textContent === "Show more") {
            hiddenInfo.style.display = 'block';
            btn.textContent = "Hide it";
        } else {
            hiddenInfo.style.display = 'none';
            btn.textContent = "Show more";
        }
    }
}
