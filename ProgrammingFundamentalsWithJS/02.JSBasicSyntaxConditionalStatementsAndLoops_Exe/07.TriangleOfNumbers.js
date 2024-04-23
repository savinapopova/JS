function solve(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        for (let j = 0; j < i; j++) {
            output = output + i + " ";
        }
        console.log(output.trim())
    }
}
