function solve(data) {
    let garages = {};

    for (let element of data) {
        let tokens = element.split(" - ");
        let garageNumber = tokens.shift();

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [];
        }

        garages[garageNumber]
            .push(Object
                .fromEntries(tokens[0]
                    .split(", ").map(t => t.split(": "))));
    }

    Object.entries(garages)
        .forEach(g => {
            console.log("Garage № " + g[0]);
            g[1]
                .forEach(o => {
                    let output = [];
                    Object.entries(o)
                        .forEach(e => output
                            .push(`${e[0]} - ${e[1]}`));
                    console.log("--- " + output.join(", "));
                })
        });

}
