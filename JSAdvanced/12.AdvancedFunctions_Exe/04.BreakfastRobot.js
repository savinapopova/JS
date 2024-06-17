function solve() {
    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            fat: 0,
            protein: 0
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            fat: 0,
            protein: 0
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            protein: 0
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            carbohydrate: 0
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let commands = {
        restock(microElement, quantity) {
            store[microElement]+= Number(quantity);
            return "Success";
        },
        prepare (recipe, quantity) {
            let ingredient;
            quantity = Number(quantity);
           let onStock = true;

            for (let microElement in products[recipe]) {
                let total = products[recipe][microElement] * quantity;
                if (total > store[microElement]) {
                    onStock = false;
                    ingredient = microElement;
                    return (`Error: not enough ${ingredient} in stock`);
                }

            }
           changeQuantity(recipe, quantity);
            return "Success";
        },
        report() {
           return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
        }
    };


    return function(order) {
        let tokens = order.split(" ");
        let command = tokens.shift();
        return commands[command](...tokens);
    };

    function changeQuantity(recipe, quantity) {
        for (let microElement in products[recipe]) {
            let total = products[recipe][microElement] * quantity;
            store[microElement]-= total;
        }
    }
}


