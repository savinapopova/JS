function solve() {
    let inputs = Array
        .from(document.querySelectorAll('#container input'));
    let [movie, hall, price] = inputs;

    let onScreenBtn = document
        .querySelector('#container button');
    let list = document.querySelector('#movies ul');
    let archiveList = document.querySelector('#archive ul');
    onScreenBtn.addEventListener('click', addMovie);
    let clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', clearArchive);

    function addMovie(event) {
        event.preventDefault();

        if (inputs.some(i => i.value.trim().length === 0)
            || isNaN(Number(price.value))) {
            return;
        }

        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = movie.value;
        let strong1 = document.createElement('strong');
        strong1.textContent = 'Hall: ' + hall.value;

        let div = document.createElement('div');
        let strong2 = document.createElement('strong');
        let priceValue = Number(price.value)
        strong2.textContent = priceValue.toFixed(2);
        let input = document.createElement('input');
        input.placeholder = "Tickets Sold";
        let archiveBtn = document.createElement('button');
        archiveBtn.textContent = "Archive";
        div.appendChild(strong2);
        div.appendChild(input);
        div.appendChild(archiveBtn);

        li.appendChild(span);
        li.appendChild(strong1);
        li.appendChild(div);

        list.appendChild(li);

        archiveBtn.addEventListener('click', archiveMovie);

        inputs.forEach(i => i.value = '');

        function archiveMovie(event) {
            event.preventDefault();

            if (input.value.trim().length === 0 || isNaN(Number(input.value))) {
                return;
            }

            list.removeChild(li);
            let totalSum = (Number(priceValue) * Number(input.value)).toFixed(2);
            strong1.textContent = 'Total amount: ' + totalSum;
            li.removeChild(div);
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li.appendChild(deleteBtn);
            archiveList.appendChild(li);

            deleteBtn.addEventListener('click', deleteMovie);

            function deleteMovie(event) {
                event.preventDefault();

                archiveList.removeChild(li);
            }

        }


    }

    function clearArchive(event) {
        event.preventDefault();

        while (archiveList.firstChild) {
            archiveList.removeChild(archiveList.firstChild);
        }
    }


}
