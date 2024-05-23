function solve(pies, start, end) {
    let startIndex = pies.indexOf(start);
    let endIndex = pies.indexOf(end) + 1;

    return pies.slice(startIndex, endIndex);
}
