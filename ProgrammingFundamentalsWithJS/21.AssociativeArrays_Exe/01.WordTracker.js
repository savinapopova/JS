function solve(data) {
    let tracker = {};
    data
        .shift()
        .split(" ")
        .forEach(w => tracker[w] = 0);

    for (let word of data) {
        if (tracker.hasOwnProperty(word)) {
            tracker[word]++;
        }
    }
    Object.entries(tracker)
        .sort(([word1, count1], [word2, count2]) => count2 - count1)
        .forEach(e => console.log(e[0], "-", e[1]));
}
