function solve(arr) {
    let step = Number(arr.pop());
    let output = [];

    for (let i = 0; i < arr.length; i+= step) {
        output.push(arr[i]);
    } console.log(output.join(" "));
}
