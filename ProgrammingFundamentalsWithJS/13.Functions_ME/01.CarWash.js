function solve(input) {
    let value = 0;
let commands = {
    "soap": () => value + 10,
    "water": () => value * 1.2,
    "vacuum cleaner": () => value * 1.25,
    "mud": () => value * 0.9
};


input.forEach(c => value = commands[c]());

if (value < 0) {
    value = 0;
}

console.log(`The car is ${value.toFixed(2)}% clean.`)
}

