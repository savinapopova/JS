function solve(arr) {
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < arr.length; i++) {
        originalSum+= arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] + i;
        } else {
            arr[i] = arr[i] - i;
        }
        modifiedSum+= arr[i];
    }
    console.log(`[ ${arr.join(", ")} ]`);
    console.log(originalSum);
    console.log(modifiedSum);
}

