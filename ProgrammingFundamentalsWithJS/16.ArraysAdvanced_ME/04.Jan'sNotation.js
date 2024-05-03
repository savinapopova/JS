function solve(arr) {

    let numbers = [];
    let operators = [];

    let operations = {
       '+': (a, b) => a + b,
       '-': (a, b) => a - b,
       '*': (a, b) => a * b,
       '/': (a, b) => a / b
    };

    for (let element of arr) {
        if (isNumber(element)) {
            numbers.push(Number(element));
        } else if (!isNumber(element) && numbers.length > 1) {
           let num2 = numbers.pop();
           let num1 = numbers.pop();
          let result = operations[element](num1, num2);
          numbers.push(result);
        } else {
            operators.push(element);
        }
    }
    if (operators.length > 0) {
        console.log("Error: not enough operands!");
        return;
    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!");
         return;
    }

    console.log(numbers[0]);

    function isNumber(element) {
        return element !== '+' && element !== '-' &&
            element !== '*' && element !== '/';
    }
}
