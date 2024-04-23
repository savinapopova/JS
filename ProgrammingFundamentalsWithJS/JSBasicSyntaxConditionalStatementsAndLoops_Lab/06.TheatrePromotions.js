function solve(day, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
        return;
    }

    let result = null;

    switch (day) {
        case "Weekday":
            if (age <= 18) {
                result = "12$";
            } else if (age <= 64) {
                result = "18$";
            } else if (age <= 122) {
                result = "12$";
            }
            break;
        case "Weekend":
            if (age <= 18) {
                result = "15$";
            } else if (age <= 64) {
                result = "20$";
            } else if (age <= 122) {
                result = "15$";
            }
            break;
        case "Holiday":
            if (age <= 18) {
                result = "5$";
            } else if (age <= 64) {
                result = "12$";
            } else if (age <= 122) {
                result = "10$";
            }
            break;
    }
    console.log(result);
}
