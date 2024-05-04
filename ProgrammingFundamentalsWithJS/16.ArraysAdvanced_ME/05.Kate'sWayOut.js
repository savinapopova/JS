function solve(arr) {
    let rows = arr.shift();
    let matrix = arr.map(r => r.split(""));
    let startRow;
    let startCol;
    let  startFound = false;



    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 'k') {
                startRow = row;
                startCol = col;
                startFound = true;
                break;
            }
            }
        if (startFound) {
            break;
        }
    }

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const queue = [{row: startRow, col: startCol, moves: 0}];
    const visited = new Set([`${startRow}, ${startCol}`]);
    let maxMoves = -1;

    if (isExit(startRow, startCol)) {
        maxMoves = 0;
    }

    while (queue.length > 0) {
        const {row, col, moves} = queue.shift();



        for (let [dr, dc] of directions) {
            let newRow = row + dr;
            let newCol = col + dc;

            if (isInBounds(newRow, newCol) && matrix[newRow][newCol] === ' ') {
                if (!visited.has(`${newRow}, ${newCol}`)) {
                    visited.add(`${newRow}, ${newCol}`);
                    queue.push({row: newRow, col: newCol, moves: moves + 1});

                    if (isExit(newRow, newCol)) {
                        maxMoves = Math.max(maxMoves, moves + 1);
                    }
                }
            }
        }
    }

    let output;

    if (maxMoves === -1) {
        output = "Kate cannot get out";
    } else {
        output = `Kate got out in ${maxMoves + 1} moves`
    }
    console.log(output);

    function isExit(row, col) {
        return row === 0 || row === matrix.length - 1 ||
            col === 0 || col === matrix[row].length - 1;
    }


    function isInBounds(row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }
}
