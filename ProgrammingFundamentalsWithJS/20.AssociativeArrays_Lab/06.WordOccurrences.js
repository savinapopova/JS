function solve(data) {
    let wordOccurrences = {};

    for (let word of data) {
        if (!wordOccurrences.hasOwnProperty(word)) {
            wordOccurrences[word] = 1;
        } else {
            wordOccurrences[word]++;
        }
    }
    Object.entries(wordOccurrences)
        .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
        .forEach(e => console.log(e[0], "->", e[1], "times"));
}
