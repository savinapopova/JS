function solve(num1, num2, operator) {

    let calculator = {
    "add": () => num1 + num2,
    "subtract": () => num1 - num2,
    "multiply": () => num1 * num2,
        "divide": () => num1 / num2
    };
    let result = calculator[operator]();
    console.log(result);
}
