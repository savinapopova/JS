function solve(data) {
    data.shift();

    let letterPattern = /[star]/gmi;
    let messagePattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->\d+/m;

    let attacked = [];
    let destroyed = [];


    for (let element of data) {
        let decreaseCount = 0;
        if (element.match(letterPattern)) {
            decreaseCount = element.match(letterPattern).length;
        }
        let decrypted = "";
        let invalidMessage = false;
        for (let char of element) {
            let newCharCode = char.charCodeAt(0) - decreaseCount;
            if (newCharCode < 0) {
                invalidMessage = true;
                break;
            }
            decrypted+= String
                .fromCharCode(char.charCodeAt(0) - decreaseCount);
        }
        if (invalidMessage) {
            continue;
        }
        let match = messagePattern.exec(decrypted);
        if (match !== null) {
            let {planetName, attackType} = match.groups;
            if (attackType === 'A') {
                attacked.push(planetName);
            } else {
                destroyed.push(planetName);
            }
        }
    }
    console.log("Attacked planets: " + attacked.length);
    attacked
        .sort((a, b) => a.localeCompare(b))
        .forEach(p => console.log("-> " + p));
    console.log("Destroyed planets: " + destroyed.length);
    destroyed
        .sort((a, b) => a.localeCompare(b))
        .forEach(p => console.log("-> " + p));
}
