function solve(num) {
    let digits = new Set(num.toString().split("").map(Number));
    if (digits.size === 1) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(num.toString().split("").map(Number)
        .reduce((a,b) => a + b, 0));
}
