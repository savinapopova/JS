function solve(num) {

    let average = getAverage(num);

    while (average <= 5) {
        num = Number(num.toString() + 9);
        average = getAverage(num);
    }
    console.log(num);

    function getAverage(num) {
        let numbers = num.toString()
            .split("")
            .map(e => Number(e));
        let sum = numbers
            .reduce((a, b) => a + b, 0);
        return  sum / numbers.length;
    }

}
