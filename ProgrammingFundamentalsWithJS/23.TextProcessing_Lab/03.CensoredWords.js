function solve(text, word) {
    console.log(text.split(word).join("*".repeat(word.length)));
}
