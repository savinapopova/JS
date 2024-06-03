function solve(arr) {
    let heroes = [];

    for (let element of arr) {
        if (element.trim() === "") continue;
        let tokens = element.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items;
        if (tokens[2] !== undefined) {
            items = tokens[2].split(", ");
        } else {
            items = [];
        }

        let hero = {
            name,
            level,
            items
        };
        heroes.push(hero);
    }
  return JSON.stringify(heroes);
}
