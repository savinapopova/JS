function solve() {
    let input = document.getElementById('input');
    let selectMenuTo = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');

    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    selectMenuTo.appendChild(binaryOption);

    let hexOption = document.createElement('option');
    hexOption.textContent = 'Hexadecimal';
    hexOption.value = 'hexadecimal';
    selectMenuTo.appendChild(hexOption);

    let convertBtn = document.querySelector('button');
    convertBtn.addEventListener('click', () => {
        let number = Number(input.value);
        let resultValue = '';
        if (selectMenuTo.value === 'binary') {
            resultValue = number.toString(2);
        } else if (selectMenuTo.value === 'hexadecimal') {
            resultValue = number.toString(16).toUpperCase();
        }

        result.value = resultValue;
    });
}
