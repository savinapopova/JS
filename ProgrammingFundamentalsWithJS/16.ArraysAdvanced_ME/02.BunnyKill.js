function solve(input) {
    let coordinates = input
        .pop()
        .split(" ")
        .map(p => p.split(","))
        .map(r => r.map(Number));

    let field = input
        .map(r => r.split(" "))
        .map(r => r.map(Number));


    let totalDamage = 0;
    let count = 0;

    if (field.length === 0) {
        console.log(totalDamage);
        console.log(count);
        return;
    }

    while (coordinates.length > 0) {
        let pair = coordinates.shift();
        let row = pair[0];
        let col = pair[1];

        let value = field[row][col];
        if (value === 0) {
            continue;
        }
        field[row][col] = 0;

        doDamage(row - 1, col, value);
        doDamage(row - 1, col + 1, value);
        doDamage(row, col + 1, value);
        doDamage(row + 1, col + 1, value);
        doDamage(row + 1, col, value);
        doDamage(row + 1, col - 1, value);
        doDamage(row, col - 1, value);
        doDamage(row - 1, col - 1, value);

        count++;
        totalDamage+= value;

    }

    for (let row = 0; row < field.length; row++) {
        count+= field[row].filter(b => b > 0).length;
        totalDamage+= field[row].reduce((a, b) => a + b, 0);
    }

    console.log(totalDamage);
    console.log(count);

    function doDamage(row, col, value) {
        if (isInBounds(row,col)) {
            field[row][col]-= value;
            if (field[row][col] < 0) {
                field[row][col] = 0;
            }
        }
    }

    function isInBounds(row, col) {
        return row >= 0 && row < field.length && col >= 0 && col < field[row].length;
    }
}
