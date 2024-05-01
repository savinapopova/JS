function solve(numbers, bomb) {
    let bombNumber = bomb[0];
    let power = bomb[1];

    while (numbers.includes(bombNumber)) {
        let index = numbers.indexOf(bombNumber);
        let startIndex = index - power;
        if (startIndex < 0) {
            startIndex = 0;
        }
        let count = 2 * power + 1;
        if (startIndex + count > numbers.length - 1) {
            count = (numbers.length - 1 - index) + 1 + power;
        }
        numbers.splice(startIndex, count);
    }

        console.log(numbers.reduce((a, b) => a+ b, 0));


}

solve([], [1, 3])
