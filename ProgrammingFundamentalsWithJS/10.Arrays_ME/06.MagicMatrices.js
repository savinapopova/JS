function solve(matrix) {

    let sums = new Set();

    for (let row = 0; row < matrix.length; row++) {
        let sum = matrix[row].reduce((a,b) => a +b, 0);
        sums.add(sum);
    }
    let turned = [];


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (turned[col] === undefined) {
                turned[col] = [];
            }
            turned[col][matrix.length - 1 - row] = matrix[row][col];
        }

    }


    for (let row = 0; row < turned.length; row++) {
        let sum = turned[row].reduce((a, b) => a + b, 0);
        sums.add(sum);
    }
    console.log(sums.size === 1);
}
