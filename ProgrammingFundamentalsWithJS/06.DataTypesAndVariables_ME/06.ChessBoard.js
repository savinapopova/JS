function solve(n) {
    let output = '<div class="chessboard">\n';

    for (let row = 1; row <= n; row++) {
        output += "  <div>\n";
        for (let col = 1; col <= n; col++) {
            if (row % 2 !== 0 && col % 2 !== 0) {
                output+= "    <span class=\"black\"></span>\n";
            } else if (row % 2 !== 0 && col % 2 === 0) {
                output+= "    <span class=\"white\"></span>\n";
            } else if (row % 2 === 0 && col % 2 !== 0) {
                output+= "    <span class=\"white\"></span>\n";
            } else if (row % 2 === 0 && col % 2 === 0) {
                output+= "    <span class=\"black\"></span>\n";
            }
        }
              output+=  "  </div>\n";
        }


    output = output + '</div>';
    console.log(output);
}
