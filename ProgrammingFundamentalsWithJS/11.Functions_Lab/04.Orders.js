function solve(item, count) {
    let menu = {
        "coffee": 1.50,
        "water": 1.00,
        "coke": 1.40,
        "snacks": 2.00
    };

    let totalPrice = count * menu[item];
    console.log(totalPrice.toFixed(2));
}
