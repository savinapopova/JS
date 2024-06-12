function addItem() {

    let menu = document.getElementById('menu');
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');

    let text = textInput.value;
    let value = valueInput.value;

    if (text.trim().length === 0 || value.trim().length === 0) {
        return;
    }

    let option = document.createElement('option');
    option.textContent = text;
    option.value = value;
    menu.appendChild(option);
    textInput.value = '';
    valueInput.value = '';
}
