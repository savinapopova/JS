function deleteByEmail() {
    let inputField = document.querySelector('[name = "email"]');
    let email = inputField.value;
    let rows = Array.from(document.querySelector("tbody").children);

    let deleted = false;

    for (let row of rows) {
        if (row.children[1].textContent === email) {
            row.remove();
            inputField.value = "";
            deleted = true;
        }
    }

    let result = document.getElementById("result");

    if (deleted) {
        result.textContent = "Deleted.";
    } else {
        result.textContent = "Not found.";
    }
}
