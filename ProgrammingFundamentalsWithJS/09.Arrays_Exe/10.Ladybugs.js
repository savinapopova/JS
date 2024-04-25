function solve(input) {
    let fieldSize = Number(input[0]);
    if (fieldSize === 0) {
        return;
    }
    let field = Array(fieldSize).fill(0);
    let positions = input[1].split(" ").map(p => Number(p))
        .filter(p => p >= 0 && p < fieldSize);

    for (let position of positions) {

        field[position] = 1;
    }

    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(" ");
        let currentIndex = Number(commands[0]);
        if (currentIndex < 0 || currentIndex >= fieldSize) {
            continue;
        }
        let direction = commands[1];
        let count = Number(commands[2]);

        if (field[currentIndex] === 0) {
            continue;
        }
        field[currentIndex] = 0;

        let target;

        switch (direction) {
            case "left":
                target = currentIndex - count;
                break;
            case  "right":
                target = currentIndex + count;
                break;
        }

        let hasLanded = false;

        while (!hasLanded) {
            if (target < 0 || target > fieldSize - 1) {
                break;
            }
            if (field[target] === 0) {
                field[target] = 1;
                hasLanded = true;
            } else {
                if (direction === "right") {
                    target+= count;
                } else {
                    target-= count;
                }
            }
        }
    }
    console.log(field.join(" "));
}

solve([ 3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'])
