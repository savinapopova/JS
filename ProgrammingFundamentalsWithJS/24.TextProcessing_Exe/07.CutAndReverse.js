function solve(text) {
    let string1 = text
        .slice(0, text.length / 2)
        .split("")
        .reverse()
        .join("");
    let string2 = text.slice(text.length / 2)
        .split("")
        .reverse()
        .join("");
    console.log(string1);
    console.log(string2);
}
