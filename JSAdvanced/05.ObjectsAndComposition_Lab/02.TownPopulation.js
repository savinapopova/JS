function solve(data) {
    let towns = {};

    for (let element of data) {
        let [town, population] = element.split(" <-> ");

        if (!towns.hasOwnProperty(town)) {
            towns[town] = Number(population);
        } else {
            towns[town]+= Number(population);
        }
    }

    Object.entries(towns)
        .forEach(e => console.log(`${e[0]} : ${e[1]}`));
}
