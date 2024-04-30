function solve(input) {
    let wagons = input
        .shift()
        .split(" ")
        .map(Number);
    let maxCapacity = Number(input.shift());

    for (let element of input) {
        let command = element.split(" ");
        if (command.length === 2) {
            wagons.push(Number(command[1]));
            continue;
        }
        let passengers = Number(command[0]);

        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + passengers <= maxCapacity) {
                wagons[i] += passengers;
                break;
            }
        }

    }

    console.log(wagons.join(" "));
}
