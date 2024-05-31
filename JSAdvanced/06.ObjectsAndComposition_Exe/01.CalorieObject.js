function solve(arr) {
    let object = {};

    for (let i = 0; i < arr.length - 1; i+= 2) {
        let food = arr[i];
        let cal = Number(arr[i + 1]);
        object[food] = cal;
    }
    console.log(object);
}
