function solve() {
    let table = document.querySelector('table');
    let tbody = document.querySelector('tbody');
    let result = document.querySelector('#check p');
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let checkBtn = document.querySelector('button:first-of-type');
    let clearBtn = document.querySelector('button:nth-of-type(2)');
    checkBtn.addEventListener('click', sudoku);
    clearBtn.addEventListener('click', clear);

    function sudoku() {
        let matrix = [];

        for (let row of rows) {
         matrix.push(Array.from(row.children)
             .map(td => td.querySelector('input'))
             .map(i => Number(i.value)));
        }

        let isSudoku = checkSudoku(matrix);
        if (isSudoku) {
            let turned = turnMatrix(matrix);
            isSudoku = checkSudoku(turned);
        }


        if (!isSudoku) {
           result.textContent = 'NOP! You are not done yet...';
           result.style.color = 'red';
           table.style.border = '2px solid red';
        } else {
            result.textContent = 'You solve it! Congratulations!';
            result.style.color = 'green';
            table.style.border = '2px solid green';
        }

        function turnMatrix (matrix) {
            let turned = [];
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    if (turned[col] === undefined) {
                        turned[col] = [];
                    }
                    turned[col][matrix.length - 1 - row] = matrix[row][col];
                }
            }
            return turned;
        }

        function checkSudoku(matrix) {
            let sum = matrix[0].reduce((a, b) => a + b);
            for (let row = 0; row < matrix.length; row++) {
                if (matrix[row].reduce((a, b) => a + b) !== sum) {
                     return false;
                }
                let rowSet = new Set(matrix[row]);
                if (rowSet.size !== matrix[row].length) {
                    return false;
                }
            }
            return true;
        }

    }

    function clear() {
        for (let row of rows) {
            Array.from(row.children)
                .map(td => td.querySelector("input"))
                .forEach(i => i.value = '');
            table.style.border = 'none';
            result.textContent = '';
        }
    }
}
