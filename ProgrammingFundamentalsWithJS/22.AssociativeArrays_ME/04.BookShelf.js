function solve(data) {
    let idByGenre = {};
    let shelves = {};

    for (let element of data) {

        if (element.includes(" -> ")) {
            let tokens = element.split(" -> ");
            let id = tokens[0];
            let genre = tokens[1];

            if (!Object.values(idByGenre).includes(id)) {
                idByGenre[genre] = id;
                shelves[genre] = [];
            }
            continue;
        }

        element = element.split(": ");
        let title = element[0];
        let tokens = element[1].split(", ");
        let author = tokens[0];
        let genre = tokens[1];

        if (shelves.hasOwnProperty(genre)) {
            shelves[genre].push({title, author});
        }
    }
    Object.entries(shelves)
        .sort((e1, e2) =>
        e2[1].length - e1[1].length)
        .forEach(e => {
            console.log(`${idByGenre[e[0]]} ${e[0]}: ${e[1].length}`);
            e[1]
                .sort((b1, b2) => b1.title.localeCompare(b2.title))
                .forEach(o =>
                console.log(`--> ${o.title}: ${o.author}`));
        });
}
