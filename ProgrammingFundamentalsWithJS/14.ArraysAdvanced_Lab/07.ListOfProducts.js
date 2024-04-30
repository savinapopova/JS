function solve(arr) {
    arr
        .sort()
        .forEach((x, i) => console.log(`${i + 1}.${x}`));
}
