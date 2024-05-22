function solve(text) {
    let pattern = /\w+/gm;
    let words = text.match(pattern);
    if (words) {
        console.log(words
            .map(w => w.toUpperCase())
            .join(", "));
    }
}

solve('hi-hi')
