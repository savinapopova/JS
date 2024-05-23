function solve(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = i - 1; j >= i - k ; j--) {
            if (j < 0) {
                break;
            }
            sum+= arr[j];
        }
        arr.push(sum)
    }
    return arr;
}

solve(8, 2)
