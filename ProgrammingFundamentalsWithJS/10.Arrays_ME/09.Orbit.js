function solve(input) {
    let rows = input[0];
    let cols = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = new Array(rows)
        .fill(0)
        .map(() => new Array(cols)
            .fill(0));
    let value = 1;



    fillMatrix(x, y, value);

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(" "));
    }




    function fillMatrix(x, y, value) {

        if (!isInBounds(x, y) || (matrix[x][y] !== 0
        && matrix[x][y] <= value)) {
            return;
        }

        matrix[x][y] = value;

        fillMatrix(x - 1, y, value +1);
        fillMatrix(x - 1, y + 1, value +1);
        fillMatrix( x, y + 1, value +1);
        fillMatrix(x + 1, y + 1, value +1);
        fillMatrix(x + 1, y, value +1);
        fillMatrix(x + 1, y - 1, value +1);
        fillMatrix (x, y - 1, value +1);
        fillMatrix(x - 1, y - 1, value +1);

    }


    function isInBounds(x, y) {
        return x >= 0 && x < matrix.length && y >= 0 && y < matrix[x].length;
    }

}
