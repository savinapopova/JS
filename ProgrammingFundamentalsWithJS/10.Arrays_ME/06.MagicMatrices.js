function solve(matrix) {

    let sums = [];


    for (let row = 0; row < matrix.length; row++) {
        let colSum = 0;
        let rowSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            colSum+= matrix[row][col];
        }
        sums.push(colSum);
        rowSum = matrix[row].reduce((a,b) => a + b, 0);
        sums.push(rowSum);
    }

    sums = sums.filter(num => num !== sums[0]);
    if (sums.length > 0) {
        console.log(false);
    } else {
        console.log(true);
    }
}
