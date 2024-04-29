function solve(num1, num2, num3) {

    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log("Positive");
        return;
    }

    let signs = {
        "Positive": 0,
        "Negative": 0,
    }

    checkSigns(num1);
    checkSigns(num2);
    checkSigns(num3);

    let output;
    if (signs.Negative === 2 || signs.Negative === 0) {
        output = "Positive";
    } else {
        output = "Negative";
    }
    console.log(output);

    function checkSigns(num) {
        if (num < 0) {
            signs.Negative++;
        } else {
            signs.Positive++;
        }
    }
}
