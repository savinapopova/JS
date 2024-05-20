function solve([numbers]) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/gm;

    let match = numbers.match(pattern);

    console.log(match.join(", "));
}
