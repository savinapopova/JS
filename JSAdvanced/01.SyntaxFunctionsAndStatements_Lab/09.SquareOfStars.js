function solve(count = 5) {
    for (let i = 0; i < count; i++) {
        let row = "";
        for (let j = 0; j < count; j++) {
            row+= '* ';
        }
        console.log(row.trim());
    }
}
