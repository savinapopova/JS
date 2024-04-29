function  solve(num) {
    let oddSum = 0;
    let evenSum = 0;

    for (let element of num.toString()) {
        let digit = Number(element);
        if (digit % 2 === 0) {
            evenSum+= digit;
        } else {
            oddSum+= digit;
        }
    }
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
