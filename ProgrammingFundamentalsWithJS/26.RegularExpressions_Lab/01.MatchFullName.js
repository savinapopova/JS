function solve(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
    let match = names.match(pattern);
    console.log(match.join(" "));
}
