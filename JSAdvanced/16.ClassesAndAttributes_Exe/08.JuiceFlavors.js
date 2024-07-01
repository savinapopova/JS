function solve(data) {

    let juices =  new Map();
    let bottles =  new Map();

    for (let element of data) {
        let tokens = element.split(" => ");
        let juice = tokens[0];
        let quantity = Number(tokens[1]);

        if (!juices.has(juice)) {
            juices.set(juice, 0);
        }

        juices.set(juice, juices.get(juice) + quantity);

        let totalQuantity = juices.get(juice);

        if (totalQuantity >= 1000) {
            let bottlesQuantity = Math.trunc(totalQuantity / 1000);
            let left = totalQuantity % 1000;

            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }

            bottles.set(juice, bottles.get(juice) + bottlesQuantity);
            juices.set(juice, left);
        }
    }

    bottles.forEach((value, key) => console.log(`${key} => ${value}`));


}

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
