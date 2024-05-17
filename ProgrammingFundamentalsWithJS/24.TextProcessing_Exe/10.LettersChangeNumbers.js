function solve(data) {
    let elements = data.split(/ +/);
    let result = 0;

    for (let element of elements) {
        if (element.length < 3) {
            continue;
        }
        let current = 0;
        let firstChar = element.slice(0, 1);
        let lastChar = element.slice(element.length - 1);
        let number = Number(element.slice(1, element.length - 1));
        if (isUpperCase(firstChar)) {
            current+= number / (firstChar.charCodeAt(0) - 64);
        } else {
            current+= number * (firstChar.charCodeAt(0) - 96);
        }

        if (isUpperCase(lastChar)) {
            current-= (lastChar.charCodeAt(0) - 64);
        } else {
            current+= (lastChar.charCodeAt(0) - 96);
        }

        result+= current;
    }

    console.log(result.toFixed(2));


    function isUpperCase(char) {
        return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
    }
}
