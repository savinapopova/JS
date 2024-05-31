function solve(order) {
    let car = {model: order.model};

    let volume;
    let power;
    if (order.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (order.power <= 120) {
        power = 120;
        volume = 2400;
    } else if (order.power <= 200) {
        power = 200;
        volume = 3500;
    }

    let engine = {power, volume};
    car.engine = engine;

    let carriage = {
        type: order.carriage,
        color: order.color
    };

    car.carriage = carriage;

    let wheelSize = order.wheelsize;
    if (order.wheelsize % 2 === 0) {
        wheelSize = order.wheelsize - 1;
    }

    let wheels = new Array(4).fill(wheelSize);

    car.wheels = wheels;

    return car;
}
