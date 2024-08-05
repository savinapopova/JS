async function lockedProfile() {
    let main = document.getElementById('main');
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let response = await fetch(url);
    let data = await response.json();
    console.log(Object.values(data));
    main.innerHTML = '';



    Object.values(data).forEach((e,i) => main.appendChild(createCard(e, i + 1)));

    function createCard(entry, counter) {
        let profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        let img = document.createElement('img');
        img.classList.add('userIcon');
        img.src = "./iconProfile2.png";
        profileDiv.appendChild(img);

        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
        profileDiv.appendChild(lockLabel);

        let lockCheck = document.createElement('input');
        lockCheck.type = 'radio';
        lockCheck.name = 'user' + counter + 'Locked';
        lockCheck.value = 'lock';
        lockCheck.checked = true;
        profileDiv.appendChild(lockCheck);

        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';
        profileDiv.appendChild(unlockLabel);

        let unlockCheck = document.createElement('input');
        unlockCheck.type = 'radio';
        unlockCheck.name = 'user' + counter + 'Locked';
        unlockCheck.value = 'unlock';
        profileDiv.appendChild(unlockCheck);

        let br = document.createElement('br');
        profileDiv.appendChild(br);

        let hr1 = document.createElement('hr');
        profileDiv.appendChild(hr1);

        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';
        profileDiv.appendChild(usernameLabel);

        let usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = 'user' + counter + 'Username';
        usernameInput.value = entry.username;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
        profileDiv.appendChild(usernameInput);

        let hiddenDiv = document.createElement('div');
        hiddenDiv.id = 'user' + counter + 'HiddenFields';
        let hr2 = document.createElement('hr');
        hiddenDiv.appendChild(hr2);
        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        hiddenDiv.appendChild(emailLabel);
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = 'user' + counter + 'Email';
        emailInput.value = entry.email;
        emailInput.disabled = true;
        emailInput.readOnly = true;
        hiddenDiv.appendChild(emailInput);
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';
        hiddenDiv.appendChild(ageLabel);
        let ageInput = document.createElement('input');
        ageInput.type = 'email';
        ageInput.name = 'user' + counter + 'Age';
        ageInput.value = entry.age;
        ageInput.disabled = true;
        ageInput.readOnly = true;
        hiddenDiv.appendChild(ageInput);

        hiddenDiv.style.display = 'none';

        profileDiv.appendChild(hiddenDiv);

        let btn = document.createElement('button');
        btn.textContent = 'Show more';
        profileDiv.appendChild(btn);

        btn.addEventListener('click', showOrHide);

        function showOrHide(event) {
            event.preventDefault();

            if (lockCheck.checked) {
                return;
            }

            if (btn.textContent === 'Show more') {
                hiddenDiv.style.display = 'block';
                btn.textContent = 'Hide it';
            } else {
                hiddenDiv.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }






        return profileDiv;

    }
}
