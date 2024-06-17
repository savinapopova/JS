function solve(arr, order) {
    let comparator;
    if (order === 'asc') {
        comparator = (a, b) => a - b;
    } else {
        comparator = (a, b) => b - a;
    }

    return arr.sort(comparator);
}
