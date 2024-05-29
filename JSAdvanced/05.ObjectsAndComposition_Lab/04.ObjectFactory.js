function solve(library, orders) {
    let output = [];

    for (let order of orders) {
        let object = Object.assign({}, order.template);
        for (let func of order.parts) {
            object[func] = library[func];
        }
        output.push(object);
    }
    return output;
}
