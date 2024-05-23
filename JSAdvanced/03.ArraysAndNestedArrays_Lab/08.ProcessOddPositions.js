function solve(arr) {
    return arr
        .filter((n, i) => i % 2)
        .map(n => n * 2)
        .reverse();
}
