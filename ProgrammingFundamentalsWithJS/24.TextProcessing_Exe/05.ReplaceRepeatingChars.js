function solve(text) {
    if (text.length === 0) {
        console.log("");
        return;
    }
    let output = text[0];
    text = text.substring(1);
    for (let char of text) {
        if (output[output.length - 1] === char) {
            continue;
        }
        output+= char;
    }
    console.log(output);
}

solve('')
