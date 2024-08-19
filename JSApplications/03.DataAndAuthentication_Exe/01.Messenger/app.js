function attachEvents() {

    let url = 'http://localhost:3030/jsonstore/messenger';
    let form = document.getElementById('controls');
    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');
    let authorInput = document.querySelector("input[name='author']");
    let contentInput = document.querySelector("input[name='content']");
    let msgDisplay = document.getElementById('messages');

    sendBtn.addEventListener('click', postData);
    refreshBtn.addEventListener('click', showMessages);

    async function postData(event) {
        event.preventDefault();

        let author = authorInput.value.trim();
        let content = contentInput.value.trim();
        console.log(author, content);

        try {
            if (!author || !content) {
                console.log("No data");
                throw new Error("The fields cannot be empty");
            }

                let body = JSON.stringify({author, content});

                let request = await fetch(url,
                    {method: 'post',
                        headers: {'Content-Type': 'application/json'},
                        body});

                if (!request.ok) {
                    let error = await request.json();
                    throw new Error(error.message);
                }
                console.log("Data sent");
        } catch (error) {
            alert(error.message);
        }
    }

   async function showMessages(event) {
        event.preventDefault();
        msgDisplay.innerHTML = '';

        try {
            let response = await fetch(url);

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            let data = await response.json();
            let messages = Object.values(data);
            console.log(messages);
            let text = messages.map(o => `${o.author}: ${o.content}`)
                .join('\n');
            msgDisplay.textContent = text;
        } catch (error) {
            alert(error.message);
        }


    }


}

attachEvents();
