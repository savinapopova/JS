function solve(arr) {
    let rotations = arr.pop();

    if (rotations === arr.length) {
        console.log(arr.join(" "));
        return;
    }

    for (let i = 0; i < rotations; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(" "));
}
