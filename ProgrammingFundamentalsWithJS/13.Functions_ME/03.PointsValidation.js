function solve(input) {
    let [ x1, y1, x2, y2] = input;

    let distance1 = getDistance(x1, y1, 0, 0);
    let distance2 = getDistance(x2, y2, 0, 0);
    let distance3 = getDistance(x1, y1, x2, y2);


    printIfValid(distance1, x1, y1, 0, 0);
    printIfValid(distance2, x2, y2, 0, 0);
    printIfValid(distance3, x1, y1, x2, y2);

    if (Number.isInteger(distance1)) {
        console.log()
    }

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function printIfValid(distance, x1, y1, x2, y2) {
        let output = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;
        if (Number.isInteger(distance)) {
            output += "valid";
        } else {
            output+= "invalid";
        }
        console.log(output);
    }
}
