function solve(num) {

    let result;

    if (num % 10 === 0) {
        result = 10;
    } else if (num % 7 === 0) {
        result = 7;
    } else if (num % 6 === 0) {
        result = 6;
    } else if (num % 3 === 0) {
        result = 3;
    } else if (num % 2 === 0) {
        result = 2;
    } else {
        console.log("Not divisible");
        return;
    }

    console.log("The number is divisible by " + result);
}
