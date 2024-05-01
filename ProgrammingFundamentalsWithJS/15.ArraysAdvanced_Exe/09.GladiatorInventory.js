function solve(input) {
    let equipment = input.shift().split(" ");

    let buy = (item) => {
        if (!equipment.includes(item)) {
            equipment.push(item);
        }
    };
    let trash = (item) => {
        let index = equipment.indexOf(item);
        if (index !== -1) {
            equipment.splice(index, 1);
        }
    };
    let repair = (item) => {
        let index = equipment.indexOf(item);
        if (index !== -1) {
            equipment.splice(index, 1);
            equipment.push(item);
        }
    };
    let upgrade = (item, version) => {
        let index = equipment.indexOf(item);
        if (index !== -1) {
            equipment
                .splice(index + 1, 0, `${item}:${version}`);
        }
    };
    for (let element of input) {
        let commandLine = element.split(" ");
        let command = commandLine[0];
        let item = commandLine[1];

        switch (command) {
            case "Buy":
                buy(item);
                break;
            case "Trash":
                trash(item);
                break;
            case "Repair":
                repair(item);
                break;
            case "Upgrade":
                let itemPiece = item
                    .split("-")[0];
                let version = item
                    .split("-")[1];
                upgrade(itemPiece, version);
                break;
        }
    }
    console.log(equipment.join(" "));
}
