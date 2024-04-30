function solve(length, k) {
    let result = [1];

    while (result.length < length) {

        let sum = result
            .slice(-k)
            .reduce((a,b) => a + b, 0);
        result.push(sum);
    }
    console.log(result.join(" "));
}
