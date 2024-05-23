function solve(arr) {
    arr.sort((a, b) => a - b);
    let output = [];

    while (arr.length > 0) {
        output.push(arr.shift());
        if (arr.length > 0) {
            output.push(arr.pop());
        }
    }
    return output;
}
