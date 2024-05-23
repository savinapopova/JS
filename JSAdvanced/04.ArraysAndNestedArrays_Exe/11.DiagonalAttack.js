function solve(input) {
    let matrix = [];

    for (let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(" ").map(e => Number(e)));
    }

    let row = 0;
    let col = 0;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    while (row < matrix.length && col < matrix[row].length) {
        firstDiagonalSum+= matrix[row][col];
        row++;
        col++;
    }

    row = 0;
    col = matrix[row].length - 1;

    while (row < matrix.length && col >= 0) {
        secondDiagonalSum+= matrix[row][col];
        row++;
        col--;
    }

    if (firstDiagonalSum !== secondDiagonalSum) {
        printMatrix(matrix);
        return;
    }

    let firstDiagonalRow = 0;
    let firstDiagonalCol = 0;
    let secondDiagonalRow = 0;
    let secondDiagonalCol = matrix[secondDiagonalRow].length - 1;

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (r === firstDiagonalRow && c === firstDiagonalCol) {
                continue;
            }
            if (r === secondDiagonalRow && c === secondDiagonalCol) {
                continue;
            }
            matrix[r][c] = firstDiagonalSum;
        }
        firstDiagonalRow++;
        firstDiagonalCol++;
        secondDiagonalRow++;
        secondDiagonalCol--;
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        for (let r = 0; r < matrix.length; r++) {
            console.log(matrix[r].join(" "));
        }
    }
}
