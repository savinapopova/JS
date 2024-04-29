function solve(num) {
    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum+= i;
        }
    }

    let output;

    if (num === sum) {
        output = " We have a perfect number!";
    } else {
        output = " It's not so perfect.";
    }
    console.log(output);
}
