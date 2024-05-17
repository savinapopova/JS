function solve(data) {
    data.pop();
    let output = [];

    for (let element of data) {
        let tokens = element.split(":");
        let char = tokens[0];
        let indexes = tokens[1].split("/");
        indexes.forEach(i => output[i] = char);
    }

    console.log(output.join(""));
}
