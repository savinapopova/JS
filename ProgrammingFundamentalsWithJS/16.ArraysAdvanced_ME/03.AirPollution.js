function solve(matrix, commandLines) {
    const ROWS = 5;
    const COLS = 5;
    const THRESHOLD = 50;

    matrix = matrix
        .map(r => r.split(" "))
        .map(r => r.map(Number));

    let commands = {
        "breeze": (row) => {
            for (let col = 0; col < COLS; col++) {
                matrix[row][col]-= 15;
                if (matrix[row][col] < 0) {
                    matrix[row][col] = 0;
                }
            }
        },
        "gale": (col) => {
            for (let row = 0; row < ROWS; row++) {
                matrix[row][col]-= 20;
                if (matrix[row][col] < 0) {
                    matrix[row][col] = 0;
                }
            }
        },
        "smog": (value) => {
           matrix = matrix.map(r => r.map(e => e+= value))
        }
    };


    for (let commandLine of commandLines) {
        let command = commandLine.split(" ")[0];
        let value = Number(commandLine.split(" ")[1]);

       commands[command](value);

    }

    let blocks = [];

    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (matrix[row][col] >= THRESHOLD) {
                blocks.push(`[${row}-${col}]`);
            }
        }
    }

    let output;

    if (blocks.length === 0) {
        output = "No polluted areas";
    } else {
        output = `Polluted areas: ${blocks.join(", ")}`;
    }

    console.log(output);

}
