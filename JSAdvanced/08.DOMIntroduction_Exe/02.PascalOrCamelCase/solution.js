function solve() {
    let text = document.getElementById('text').value;
    let caseType = document.getElementById('naming-convention').value;

    let conventions = {
        "Pascal Case": toPascalCase(),
        "Camel Case": toCamelCase()
    };

    let result = document.getElementById('result');

    if (conventions[caseType] === undefined) {
        result.textContent = "Error!"
        return;
    }

    result.textContent = conventions[caseType];

    function toCamelCase() {
        let arr = convertToLowerCase();
        for (let i = 1; i < arr.length; i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
        return arr.join("");
    }

    function toPascalCase() {
        return  convertToLowerCase()
            .map(w => w[0].toUpperCase() + w.slice(1))
            .join("");
    }

    function convertToLowerCase() {
        return text.split(" ")
            .map(w => w.toLowerCase());
    }
}
