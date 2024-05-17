function solve(data) {
    let concatenatedString = (data[0] + data[1]).toLowerCase();
    let word = data[2];
    let output = "";
    let index = 0;

    for (let i = 0; i < concatenatedString.length; i++) {
        let current = concatenatedString[i];
        if (!isVowel(current)) {
            output+= current;
            continue;
        }
        output+= word[index].toUpperCase();
        index++;
        if (index === word.length) {
            index = 0;
        }
    }

    output = output
        .split("")
        .reverse()
        .join("");

    console.log("Your generated password is " + output);

    function isVowel(char) {
        return char === 'a' || char === 'i' ||
            char === 'o' ||char === 'u' || char === 'e';
    }
}
