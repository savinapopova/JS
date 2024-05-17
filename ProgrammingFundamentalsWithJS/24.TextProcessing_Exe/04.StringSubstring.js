function solve(word, text) {
    if (text.toLowerCase().split(" ").includes(word)) {
        console.log(word.toLowerCase());
    } else {
        console.log(word, "not found!");
    }
}
