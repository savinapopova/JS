function solve(...data) {
    let types = {};
    for (let element of data) {
        let type = typeof element;
        if (!types.hasOwnProperty(type)) {
            types[type] = 0;
        }
        types[type]++;
        console.log(`${type}: ${element}`);
    }
    Object.entries(types)
        .sort((e1, e2) => e2[1] - e1[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`));

}
