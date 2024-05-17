function solve(data) {
    let text = data[0].split(" ");
    let words = {};
        data[1]
            .forEach(w => words[w] = "");

    for (let i = 0; i < text.length; i++) {
        let element = text[i];
        if (element.match(/_\.*,*/)) {
            let lastChar = "";
            if (element[element.length - 1] === "." ||
                element[element.length - 1] === ",") {
                lastChar = element[element.length - 1];
                element = element.slice(0, element.length - 1);
            }
                for (let word in words) {
                    if (words[word] === "" && word.length === element.length) {
                        text[i] = word + lastChar;
                        words[word] = "used";
                        break;
                    }
                }
        }
    }

    console.log(text.join(" "));
}
