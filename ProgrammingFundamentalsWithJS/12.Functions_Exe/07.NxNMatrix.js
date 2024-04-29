function  printMatrix(num) {
    let matrix = new Array(num).fill(null)
        .map(() => new Array(num).fill(num));

    for (let row = 0; row < num; row++) {
        console.log(matrix[row].join(" "));
    }
}
