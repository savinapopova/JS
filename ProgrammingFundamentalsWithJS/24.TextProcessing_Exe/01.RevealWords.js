function solve(words, text) {
    words = words.split(", ");
    text = text.split(" ");

    for (let i = 0; i < words.length; i++) {
        let target = '*'.repeat(words[i].length)
        let index = text.indexOf(target);
        if (index !== -1) {
            text.splice(index, 1, words[i]);
        }
    }

    console.log(text.join(" "));
}
