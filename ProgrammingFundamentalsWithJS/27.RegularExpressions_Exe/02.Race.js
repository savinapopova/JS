function solve(data) {
    let participants = {};
        data.shift()
        .split(", ")
            .forEach(e => participants[e] = 0);
        data.pop();

        let namesPattern = /[A-Za-z]+/gm;
        let digitsPattern = /\d/gm;

    for (let element of data) {
        let name = "";
        let match = namesPattern.exec(element);
        while (match !== null) {
            name+= match[0];
            match = namesPattern.exec(element);
        }
        if (!participants.hasOwnProperty(name)) {
            continue;
        }

        match = digitsPattern.exec(element);
        while (match !== null) {
            participants[name]+= Number(match[0]);
            match = digitsPattern.exec(element);
        }
    }
    let ranking = Object.entries(participants)
        .sort(([name1, points1], [name2, points2]) => points2 - points1)
        .map(e => e[0])
        .slice(0, 3);

    console.log("1st place: " + ranking[0]);
    console.log("2nd place: " + ranking[1]);
    console.log("3rd place: " + ranking[2]);
}

solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])
