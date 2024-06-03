function solve(arr) {
    let products = {};

    for (let element of arr) {
        let [town, product, price] = element.split(" | ");
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = {
                town,
                price
            };
            continue;
        }

        if (products[product].price > price) {
            products[product].price = price;
            products[product].town = town;
        }
    }
    Object.entries(products)
        .forEach(e => console.log(`${e[0]} -> ${e[1].price} (${e[1].town})`));
}
