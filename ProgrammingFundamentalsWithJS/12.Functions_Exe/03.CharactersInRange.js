function solve(char1, char2) {
    let startChar;
    let endChar;
    if (char1.charCodeAt(0) > char2.charCodeAt(0)) {
        startChar = char2;
        endChar = char1;
    } else {
        startChar = char1;
        endChar = char2;
    }

    let chars = [];
    let startCode = startChar.charCodeAt(0);
    let endCode = endChar.charCodeAt(0);

    for (let i = startCode + 1; i < endCode; i++) {
        chars.push(String.fromCharCode(i));
    }
    console.log(chars.join(" "));
}
