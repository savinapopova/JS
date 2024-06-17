function solve(data) {
    let result = [];

    let commands = {
        add: (str) => result.push(str),
        remove: (str) => result = result.filter(s => s !== str ),
        print: () => console.log(result.join(","))
    };

    for (let element of data) {
        let [command, str] = element.split(" ");
        commands[command](str);
    }
}



solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])
