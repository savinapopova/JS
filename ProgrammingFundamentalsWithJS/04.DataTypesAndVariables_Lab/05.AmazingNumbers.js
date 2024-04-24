function solve(num) {
    let sum = 0;
    for (let digit of num.toString()) {
        sum+= Number(digit);
    }
    let isAmazing = "False";
    if (sum.toString().includes('9')) {
        isAmazing = "True";
    }

    console.log(num + " Amazing? " + isAmazing);
}
