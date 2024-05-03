function solve(matrix) {
    let count = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            count = checkIsEqual(row, col, row, col + 1, count);
            count = checkIsEqual(row, col, row + 1, col, count);
        }
    }
    console.log(count);

    function checkIsEqual(row1, col1, row2, col2, count) {
        if (isInBounds(row1, col1) && isInBounds(row2, col2)) {
            if (matrix[row1][col1] === matrix[row2][col2]) {
                count++;
            }
        }
        return count;
    }

    function isInBounds(row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }
}
