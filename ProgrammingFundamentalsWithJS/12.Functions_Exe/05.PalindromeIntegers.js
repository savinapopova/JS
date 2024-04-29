function solve(arr) {
    for (let num of arr) {
        let reversed = num.toString().split("")
            .reverse().join("");
        let isPalindrome = num == reversed;
        console.log(isPalindrome);
    }
}
