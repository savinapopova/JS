function solve(n) {

    let result = 0;
    let num = 1;

    while (n > 0) {
        result+= num;
        console.log(num);
        num += 2;
        n--;
    }
    console.log("Sum: " + result);
}
