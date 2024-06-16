function solve() {
    let tbody = document.querySelector('tbody');
    let inputArea = document.querySelector('textarea:first-of-type');
    let generateBtn = document
        .querySelector('button:first-of-type');
    let buyBtn = document
        .querySelector('button:nth-of-type(2)');

    generateBtn.addEventListener('click', generate);

    function generate() {
        let furniture = JSON.parse(inputArea.value);
        for (let piece of furniture) {
            let tr = document.createElement('tr');

            let tdImage = document.createElement('td');
            let img = document.createElement('img');
            img.src = piece.img;
            tdImage.appendChild(img);
            tr.appendChild(tdImage);

            let tdName = document.createElement('td');
            let pName = document.createElement('p');
            pName.textContent = piece.name;
            tdName.appendChild(pName);
            tr.appendChild(tdName);

            let tdPrice = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = piece.price;
            tdPrice.appendChild(pPrice);
            tr.appendChild(tdPrice);

            let tdFactor = document.createElement('td');
            let pFactor = document.createElement('p');
            pFactor.textContent = piece.decFactor;
            tdFactor.appendChild(pFactor);
            tr.appendChild(tdFactor);

            let tdCheck = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'checkbox';
            tdCheck.appendChild(input);
            tr.appendChild(tdCheck);

            tbody.appendChild(tr);
        }
    }

}
