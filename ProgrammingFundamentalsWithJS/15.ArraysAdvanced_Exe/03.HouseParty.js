function solve(input) {
    let guests = [];

    for (let element of input) {
        let line = element.split(" ");
        let name = line[0];

        switch (line.length) {
            case 3:
                if (!guests.includes(name)) {
                    guests.push(name);
                } else {
                    console.log(`${name} is already in the list!`);
                }
                break;
            case 4:
                let index = guests.indexOf(name);
                if (index !== -1) {
                    guests.splice(index, 1);
                } else {
                    console.log(`${name} is not in the list!`);
                }
                break;
        }
    }
    console.log(guests.join("\n"));
}
