function calculator() {
    let firstNumber;
    let secondNumber;
    let result;

    return {
        init(selector1, selector2, resultSelector) {
            firstNumber = document.querySelector(selector1);
            secondNumber = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },
        add() {
            result.value = Number(firstNumber.value) + Number(secondNumber.value);
        },
        subtract() {
            result.value = Number(firstNumber.value) - Number(secondNumber.value);
        }
    };
}




