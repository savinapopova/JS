function solve(data) {
    let cars = {};

    let commands = {
        create: (name) => cars[name] = {},
        inherits: (name, parentName) => {
            cars[name] = Object.create(cars[parentName]);
        },
        set: (name, key, value) => cars[name][key] = value,
        print: (name) => {
            let output = [];
            let current = cars[name];
            let properties = new Map();
            while (current) {
                Object.entries(current).forEach(([key, value]) => {
                    if (!properties.has(key)) {
                        properties.set(key, value);
                    }
                });
                current = Object.getPrototypeOf(current);
            }
            properties.forEach((value, key) => output.push(`${key}:${value}`));
            console.log(output.join(","));
        }
    };

    for (let element of data) {
        let tokens = element.split(" ");
        if (tokens[0] === "create" && tokens.length === 4) {
            commands.inherits(tokens[1], tokens[3]);
            continue;
        }
        let command = tokens.shift();
        commands[command](...tokens);
    }
}

solve(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']);
