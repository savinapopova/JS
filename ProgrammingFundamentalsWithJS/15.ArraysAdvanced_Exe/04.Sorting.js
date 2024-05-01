function solve(arr) {
    arr.sort((a,b) => b - a);
    let result = [];

    while (arr.length > 0) {
        result.push(arr.shift());
        result.push(arr.pop());
    }

    console.log(result.join(" "));
}
