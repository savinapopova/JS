function solve() {
    let inputs = Array.from(document.querySelectorAll('input'));
    let textarea = document.querySelector('textarea');
    let openSectionWrapper = document.querySelector('section:nth-of-type(2) div:nth-child(2)');
    let progressSectionWrapper = document.getElementById('in-progress')
    let completeSectionWrapper = document.querySelector('section:last-of-type div:nth-child(2)');
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', createTask);

    function createTask(event) {
        event.preventDefault();

        if (inputs.some(i => i.value.length === 0) ||
            textarea.value.length === 0) {
            return;
        }

        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = inputs[0].value;
        let p1 = document.createElement('p');
        p1.textContent = 'Description: ' + textarea.value;
        let p2 = document.createElement('p');
        p2.textContent = 'Due Date: ' + inputs[1].value;
        let div = document.createElement('div');
        div.classList.add('flex');
        let startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';

        startBtn.addEventListener('click', inProgress);
        deleteBtn.addEventListener('click', deleteArticle);

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);


        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);

        openSectionWrapper.appendChild(article);

        inputs
            .forEach(i => i.value = '');
        textarea.value = '';

        function inProgress(event) {
            event.preventDefault();

            div.removeChild(startBtn);

            let finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            div.appendChild(finishBtn);

            finishBtn.addEventListener('click', completeTask);

            openSectionWrapper.removeChild(article);
            progressSectionWrapper.appendChild(article);
        }

        function deleteArticle(event) {
            event.preventDefault();

            article.parentElement.removeChild(article);
        }

        function completeTask(event) {
            event.preventDefault();

            article.removeChild(div);
            progressSectionWrapper.removeChild(article);
            completeSectionWrapper.appendChild(article);

        }
    }


}
