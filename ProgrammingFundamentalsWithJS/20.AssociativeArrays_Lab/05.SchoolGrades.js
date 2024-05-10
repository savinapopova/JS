function solve(data) {
    let grades = {};
    let averageGrade = (list) => (list
        .map(Number)
        .reduce((a, b) => a +b, 0) / list.length)
        .toFixed(2);

    for (let line of data) {
        let tokens = line.split(" ");
        let name = tokens.shift();

        if (!grades.hasOwnProperty(name)) {
            grades[name] = tokens;
        } else {
            grades[name] = grades[name].concat(tokens);
        }

    }

    Object.keys(grades)
        .sort((a, b) => a.localeCompare(b))
        .forEach(k => console.log(k + ": " + averageGrade(grades[k])));
}
