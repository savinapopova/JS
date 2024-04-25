function solve(arr1, arr2) {

    let sum = 0;
    let firstIndex;
    let areIdentical = true;

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1[i] === arr2[i]) {
            sum+= Number(arr1[i]);
        } else {
            firstIndex = i;
            areIdentical = false;
            break;
        }
    }

    if (areIdentical) {
        console.log("Arrays are identical. Sum: " + sum);
    } else {
        console.log(`Arrays are not identical. Found difference at ${firstIndex} index`);
    }
}
