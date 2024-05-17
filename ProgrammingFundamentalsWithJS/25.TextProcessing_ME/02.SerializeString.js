function solve(data) {
    let string = data[0];
    let charIndexes = {};

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (!charIndexes.hasOwnProperty(char)) {
            charIndexes[char] = [];
        }
        charIndexes[char].push(i);
    }

    Object.entries(charIndexes)
        .forEach(e => console.log(e[0] + ":" + e[1].join("/")));
}
