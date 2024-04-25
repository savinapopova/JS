function solve(arr, rotations) {
    if (arr.length === rotations) {
        console.log(arr.join(" "));
        return;
    }

    for (let i = 0; i < rotations; i++) {
            let element = arr.shift();
            arr.push(element);
    }

    console.log(arr.join(" "));
}
