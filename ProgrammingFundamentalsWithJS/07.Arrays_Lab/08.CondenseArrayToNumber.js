function solve(arr) {
    if (arr.length === 1) {
        console.log(arr[0]);
        return;
    }

    while (arr.length > 1) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(arr[i] + arr[i + 1]);
        }
        arr = newArr;
    }
    console.log(arr[0]);
}
