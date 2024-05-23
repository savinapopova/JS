function solve(arr) {
    let field = new Array(3)
        .fill(0)
        .map(() => new Array(3).fill(false));

    let playerChange = {
        'X': 'O',
        'O': 'X'
    };

    let player = 'X';
    for (let element of arr) {
        let [row, col] = element.split(" ").map(Number);
        let current = field[row][col];

        if (current !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        field[row][col] = player;

        if (checkWin()) {
            console.log(`Player ${player} wins!`);
            break;
        }
        if (fullField()) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
        player = playerChange[player];

    }

    printField();


    function printField() {
        for (let row of field) {
            console.log(row.join("\t"));
        }
    }

    function fullField() {
        return !field.flat().includes(false);
    }

    function checkWin() {
        let primary = [];
        let secondary = [];
        for (let row = 0; row < field.length; row++) {
            if (winnerFound(field[row])) {
                return true;
            }
            let currentCol = [];
            for (let col = 0; col < field[row].length; col++) {
                currentCol.push(field[col][row]);
            }
            if (winnerFound(currentCol)){
                return true;
            }
            primary.push(field[row][row]);
            secondary.push(field[row][field.length - 1 -row]);
        }

        if (winnerFound(primary) || winnerFound(secondary)) {
            return true;
        }
       return false;
    }

    function winnerFound(arr) {
        return arr
            .filter(e => e === player).length === 3;
    }
}
