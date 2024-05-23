function solve(arr) {
    let output = [];

    for (let num of arr) {
        if (num < 0) {
            output.unshift(num);
        } else {
            output.push(num);
        }
    }
    output.forEach(n => console.log(n));
}
