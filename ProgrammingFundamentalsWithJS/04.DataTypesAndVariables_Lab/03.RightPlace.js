function solve(word1, char, word2) {
    if (word1.replace("_", char) === word2) {
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
}
