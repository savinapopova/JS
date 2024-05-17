function solve(data) {
    let text = data[0];
    let condition = data[1];
    let pattern;

    if (condition === "UPPERCASE") {
        pattern = /[A-Z]/;
    } else if (condition === "LOWERCASE"){
        pattern = /[a-z]/;
    } else {
        return;
    }

    let sum = 0;

    for (let char of text) {
        if (char.match(pattern)) {
            sum+= char.charCodeAt(0);
        }
    }

    console.log("The total sum is: " + sum);
}

solve(['AC/DC',
    'UPPERCASE'])
