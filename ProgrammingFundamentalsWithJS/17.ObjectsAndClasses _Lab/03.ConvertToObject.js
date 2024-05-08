function solve(text) {
    let object = JSON.parse(text);
    for (let [key, value] of Object.entries(object)) {
        console.log(`${key}: ${value}`);
    }
}
