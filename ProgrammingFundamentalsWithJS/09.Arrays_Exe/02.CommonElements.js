function solve(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            console.log(arr1[i]);
        }
    }
}
