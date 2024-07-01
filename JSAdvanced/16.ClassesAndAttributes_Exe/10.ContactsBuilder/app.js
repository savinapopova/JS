
    class Contact {

        firstName;
        lastName;
        phone;
        email;
        _online;


        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this._online = false;
        }


        get online() {
            return this._online;
        }

        set online(value) {
            this._online = value;

            this.updateStatus();
        }

        updateStatus() {
            if (this._titleDiv) {
                if (this._online) {
                    this._titleDiv.classList.add('online');
                } else {
                    this._titleDiv.classList.remove('online');
                }
            }
        }

        render(id) {
            let element = document.getElementById(id);
            let article = document.createElement('article');
            this._titleDiv = document.createElement('div');
            this._titleDiv.classList.add('title');
            this._titleDiv.textContent = this.firstName + ' ' + this.lastName;
            let btn = document.createElement('button');
            btn.innerHTML = '&#8505;';
            this._titleDiv.appendChild(btn);
            if (this._online) {
                this._titleDiv.classList.add('online');
            } else {
                this._titleDiv.classList.remove('online');
            }
            article.appendChild(this._titleDiv);
            let infoDiv = document.createElement('div');
            infoDiv.classList.add('info');
            let phoneSpan = document.createElement('span');
            phoneSpan.innerHTML = `&phone; ${this.phone}`;
            let emailSpan = document.createElement('span');
            emailSpan.innerHTML = `&#9993; ${this.email}`;
            infoDiv.appendChild(phoneSpan);
            infoDiv.appendChild(emailSpan);
            infoDiv.style.display = 'none';
            article.appendChild(infoDiv);
            element.appendChild(article);

            btn.addEventListener('click', toggleInfo);

            function toggleInfo(event) {
                event.preventDefault();

                if (infoDiv.style.display === 'none') {
                    infoDiv.style.display = 'block';
                } else {
                    infoDiv.style.display = 'none'

                }
            }

        }
    }
