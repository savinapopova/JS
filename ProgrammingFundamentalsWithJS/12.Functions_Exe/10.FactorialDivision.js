function solve(num1, num2) {


    let factorial1 = getFactorial(num1);
    let factorial2 = getFactorial(num2);
    let result = factorial1 / factorial2;
    console.log(result.toFixed(2));


    function getFactorial(num) {
        if (num === 1) {
            return 1;
        }
        return num * getFactorial(num - 1);
    }
}
