function solve(matrix) {
    let count = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let current = matrix[row][col];
            if (isInBounds(row, col + 1) && current === matrix[row][col + 1]) {
                count++;
            }
            if (isInBounds(row + 1, col) && current === matrix[row + 1][col]) {
                count++;
            }
        }
    }
    return count;
    function isInBounds(row, col) {
        return row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length;
    }
}
