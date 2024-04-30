function solve(arr) {
    let distinctNumbers = new Set(arr);
    console.log(Array.from(distinctNumbers)
        .join(" "));
}
