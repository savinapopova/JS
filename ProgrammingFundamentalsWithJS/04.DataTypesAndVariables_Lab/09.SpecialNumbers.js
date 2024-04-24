function solve(num) {

    for (let i = 1; i <= num; i++) {
        let sum = 0;

        for (let digit of i.toString()) {
            sum+= Number(digit);
        }

        let isSpecial = "False";

        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = "True";
        }

        console.log(i + " -> " + isSpecial);
    }
}
