function solve() {
    let output = "";
    return {
        append: (str) => output+= str,
        removeStart: (n) => output = output.slice(n),
        removeEnd: (n) => output = output.slice(0, output.length - n),
        print: () => console.log(output)
    };
}
