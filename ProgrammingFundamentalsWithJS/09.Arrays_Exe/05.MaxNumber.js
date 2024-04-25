function solve(arr) {
    let maxNumbers = [];

    let isMaxNumber;

    for (let i = 0; i < arr.length; i++) {
        isMaxNumber = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isMaxNumber = false;
                break;
            }
        }
        if (isMaxNumber) {
            maxNumbers.push(arr[i]);
        }
    }

    console.log(maxNumbers.join(" "))
}
