function solve(data) {
    data = data
        .map(d => JSON.parse(d))
        .map(a => a.sort((a, b) => b - a))
        .sort((a, b) => a.length - b.length);

    let uniqueArrays = {};

    for (let arr of data) {
        if (!uniqueArrays.hasOwnProperty(arr.toString())) {
            uniqueArrays[arr.toString()] = arr;
        }
    }
    Object.values(uniqueArrays)
        .forEach(a => console.log(`[${a.join(", ")}]`));
}
