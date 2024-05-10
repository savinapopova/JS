function solve(data) {
    let tracker = new Map();
    data = data.split(" ");

    for (let word of data) {
        word = word.toLowerCase();
        if (!tracker.has(word)) {
            tracker.set(word, 1);
        } else {
            let count = tracker.get(word);
            count++;
            tracker.set(word, count);
        }
    }

    let output = [];
    for (let [word, count] of tracker) {
        if (count % 2 !== 0) {
            output.push(word);
        }
    }

    console.log(output.join(" "));
}
