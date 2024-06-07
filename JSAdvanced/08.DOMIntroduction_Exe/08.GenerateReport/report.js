function generateReport() {

    let headers = Array.from(document.querySelector("thead tr").children);

    let properties = headers
        .map(h => h.querySelector("[type = 'checkbox']"))
        .map(c => c.getAttribute("name"));

    let checkedIndexes = [];

    for (let i = 0; i < headers.length; i++) {

        let checkbox = headers[i].querySelector("[type = 'checkbox']");
        if (checkbox.checked) {
            checkedIndexes.push(i);
        }
    }

    let rows = Array.from(document.querySelector("tbody").children);
    let objects ={};

    for (let row = 0; row < rows.length; row++) {

        let cols = Array.from(rows[row].children)
            .map(c => c.textContent.trim());

        objects[row] = {};

        for (let i = 0; i < cols.length; i++) {
            if (checkedIndexes.includes(i)) {
                objects[row][properties[i]] = cols[i];
            }
        }
    }

    let output = JSON.stringify(Object.values(objects), null, 2);

    let outputArea = document.getElementById("output");

    outputArea.value = output;

}
