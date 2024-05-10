function solve(data) {
    let powers = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    };
    let types = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    };

    let cards = {};

    for (let element of data) {
        let tokens = element.split(": ");
        let name = tokens.shift();
        tokens = tokens[0].split(", ");
        if (!cards.hasOwnProperty(name)) {
            cards[name] = new Set(tokens);
        } else {
            let current = cards[name];
            cards[name] = new Set([...current, ...tokens]);
        }

    }
    for (let name in cards) {
        let points = Array.from(cards[name])
            .map(c => c.split(""))
            .map(a => types[a.pop()] * powers[a.join("")])
            .reduce((a, b) => a + b, 0);

            console.log(name + ": " + points);
    }
}
