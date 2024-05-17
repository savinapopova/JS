function solve(text) {
    let output = [];
    let word = "";

    for (let i = 0; i < text.length; i++) {
     let char = text[i];
        if (isUpperLetter(char) && word.length > 0) {
            output.push(word);
            word = "";
        }
        word+= char;
        if (i === text.length - 1) {
            output.push(word);
        }
    }

    console.log(output.join(", "));

    function isUpperLetter(char) {
        return char.charCodeAt(0) >= 65 &&
            char.charCodeAt(0) <= 90;
    }
}
