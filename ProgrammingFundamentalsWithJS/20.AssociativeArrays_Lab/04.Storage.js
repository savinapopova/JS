function solve(data) {
    data = data
        .map(e => e.split(" "));

    let storage = new Map();

    for (let [item, quantity] of data) {
        if (!storage.has(item)) {
            storage.set(item, Number(quantity));
        } else {
            let current = storage.get(item);
            quantity = current + Number(quantity);
            storage.set(item, quantity);
        }
    }

    for (let [key, value] of storage) {
        console.log(key, "->", value);
    }

}
