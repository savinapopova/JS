function solve(num) {
    let sum = 0;

    for (let digit of num.toString()) {
        sum+= Number(digit);
    }
    console.log(sum);
}
