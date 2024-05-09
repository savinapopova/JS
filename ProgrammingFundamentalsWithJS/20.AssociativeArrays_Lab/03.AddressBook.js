function solve(data) {
    data = data
        .map(e => e.split(":"));
    let addressBook = Object.fromEntries(data);
    Object.keys(addressBook)
        .sort((a, b) => a.localeCompare(b))
        .forEach(k => console.log(k, "->", addressBook[k]));
}
