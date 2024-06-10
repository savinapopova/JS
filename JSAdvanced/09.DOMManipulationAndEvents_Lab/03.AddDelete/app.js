function addItem() {
    let inputField = document.getElementById("newItemText");
    let text = inputField.value;
    if (text.trim().length === 0) {
        inputField.value = "";
        return;
    }
    let list = document.getElementById("items");
    let liElement = document.createElement('li');
    liElement.textContent = text;
    list.appendChild(liElement);
    inputField.value = "";

    let deleteLink = document.createElement("a");
    deleteLink.href = '#';
    deleteLink.textContent = "[Delete]";
    liElement.appendChild(deleteLink);

    deleteLink.addEventListener('click', deleteItem);

    function deleteItem(event) {
        let item = event.target.parentElement;
        item.remove();
    }
}
