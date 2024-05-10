function solve(data) {
    let resources = {};

    for (let i = 0; i < data.length - 1; i+= 2) {
        let resource = data[i];
        let amount = Number(data[i + 1]);
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = amount;
        } else {
            resources[resource]+= amount
        }
    }

     Object.entries(resources)
         .forEach(e => console.log(e[0], "->", e[1]));
}
