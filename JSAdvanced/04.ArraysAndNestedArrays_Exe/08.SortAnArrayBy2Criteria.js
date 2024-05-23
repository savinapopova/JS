function solve(arr) {
    let comparator = (a, b) => {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    }
    arr.sort(comparator).forEach(e => console.log(e));
}
