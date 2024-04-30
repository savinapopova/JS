function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}
