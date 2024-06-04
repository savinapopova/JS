function sumTable() {
    let rows = Array.from(document.getElementsByTagName("tr"));
    let sum = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        let price = Number(rows[i].lastChild.textContent);
        sum+= price;
    }

    let sumCol = rows[rows.length - 1].lastChild;
    sumCol.textContent = sum.toString();
}
