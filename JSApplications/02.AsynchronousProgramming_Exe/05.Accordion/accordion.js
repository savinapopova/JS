async function solution() {
    let main = document.getElementById('main');
    let titles = await getTitles();
    console.log(titles);
    main.innerHTML = '';
    for (const entry of titles) {
        let element = await createElement(entry);
        main.appendChild(element);
    }

    async function createElement(entry) {
        let accDiv = document.createElement('div');
        accDiv.classList.add('accordion');
        let headDiv = document.createElement('div');
        headDiv.classList.add('head');

        let span = document.createElement('span');
        span.textContent = entry.title;
        headDiv.appendChild(span);

        let btn = document.createElement('button');
        btn.classList.add('button');
        btn.id = entry._id;
        btn.textContent = 'More';
        headDiv.appendChild(btn);

        accDiv.appendChild(headDiv);

        let extraDiv = await getExtraDiv(btn.id);
        extraDiv.style.display = 'none';

        headDiv.appendChild(extraDiv);



        btn.addEventListener('click', showOrHide);

        function showOrHide(event) {
            event.preventDefault();


            if (btn.textContent === 'More') {
                extraDiv.style.display = 'block';
                btn.textContent = 'Less';
            } else {
                extraDiv.style.display = 'none';
                btn.textContent = 'More';
            }
        }

        return accDiv;
    }

    async function getExtraDiv(id) {
        let url = 'http://localhost:3030/jsonstore/advanced/articles/details/' + id;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.content);
        let extraDiv = document.createElement("div");
        extraDiv.classList.add('extra');
        let p = document.createElement('p');
        p.textContent = data.content;
        extraDiv.appendChild(p);

        return extraDiv;
    }

    async function getTitles() {
        let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
}
solution();
