function solve(text, word) {
    console.log(text.split(" ")
        .filter(w => w === word).length);
}
