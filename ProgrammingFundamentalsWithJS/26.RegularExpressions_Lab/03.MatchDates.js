function solve([input]) {

    let pattern = /(?<day>\d{2})(?<del>[-\./])(?<month>[A-Z][a-z]{2})\k<del>(?<year>\d{4})/gm;

    let match = pattern.exec(input);

    while (match !== null) {
        let {day, month, year} = match.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        match = pattern.exec(input);
    }
}
