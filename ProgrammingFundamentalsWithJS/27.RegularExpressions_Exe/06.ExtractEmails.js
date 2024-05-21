 function solve(text) {
    let pattern = /(?<= |^)([A-Za-z0-9]+(?:[\.\-\_][A-Za-z0-9]+)*@[A-Za-z]+(?:[\-]+[A-Za-z]+)*\.[A-Za-z]+(?:[\-]+[A-Za-z]+)*(?:\.[A-Za-z]+(?:[\-]+[A-Za-z]+)*)*)/gm;

        let match = text.match(pattern);

        if (match !== null) {
            console.log(match.join("\n"));
        }
}
