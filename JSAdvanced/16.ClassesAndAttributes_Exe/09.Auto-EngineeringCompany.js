function solve(data) {

    let cars = new Map();

    for (let element of data) {
        let[carBrand, carModel, count] = element.split(" | ");
        count = Number(count);

        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map);
        }

        if (!cars.get(carBrand).has(carModel)) {
            cars.get(carBrand).set(carModel, 0);
        }
        let currentQuantity = cars.get(carBrand).get(carModel);
        cars.get(carBrand).set(carModel, currentQuantity + count);
    }

    for (let [key, value] of cars) {
        console.log(key);
        for (let [carModel, count] of value) {
            console.log(`###${carModel} -> ${count}`);
        }
    }
}
