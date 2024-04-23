function solve(num) {
    let lastDigit = num % 10;

    let map = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        0: "zero"
    };
    console.log(map[lastDigit])
}

