function solve(arr) {

    for (let i = 0; i < arr.length; i++) {
        let leftArray = arr.slice(0, i);
        let rightArray = arr.slice(i + 1);

        let leftSum = leftArray.reduce((a, b) => a + b, 0);
        let rightSum = rightArray.reduce((a, b) => a + b, 0);
        if (leftSum === rightSum) {
            console.log(i);
            return;
        }
    }
    console.log("no");
}
