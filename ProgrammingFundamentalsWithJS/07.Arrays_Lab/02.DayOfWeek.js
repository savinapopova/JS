function solve(num) {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    let result = days[num - 1];
    if (result === undefined) {
        console.log("Invalid day!");
    } else {
        console.log(result);
    }
}
