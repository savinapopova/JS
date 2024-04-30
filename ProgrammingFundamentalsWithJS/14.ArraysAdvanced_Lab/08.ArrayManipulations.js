function solve(input) {
    let arr = input
        .shift()
        .split(" ")
        .map(Number);

    let commands = {
        "add": x => arr.push(x),
        "remove": x => arr = arr.filter(n => n !== x),
        "removeAt": x => arr.splice(x, 1),
        "insert": (num, i) =>arr.splice(i, 0, num)
    };

    for (let element of input) {
        let line = element.split(" ");
        let command = line[0];
        let num;
        let index;
        switch (command) {
            case "Add":
                num = Number(line[1]);
                commands.add(num);
                break;
            case "Remove":
                num = Number(line[1]);
                commands.remove(num);
                break;
            case "RemoveAt":
                index = Number(line[1]);
                commands.removeAt(index);
                break;
            case "Insert":
                num = Number(line[1]);
                index = Number(line[2]);
                commands.insert(num, index);
                break;
        }
    }

    console.log(arr.join(" "));
}
