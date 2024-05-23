function solve(rows, cols) {

    let matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    let count = 1;


    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = count++;
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = count++;
        }
        right--;
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = count++;
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = count++;
        }
        left++;
    }
    matrix.forEach(row => console.log(row.join(' ')));

}
