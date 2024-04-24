function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    if (sum.toString().includes('.')) {
        console.log(sum + " - Float")
    } else {
        console.log(sum + " - Integer")
    }
}
