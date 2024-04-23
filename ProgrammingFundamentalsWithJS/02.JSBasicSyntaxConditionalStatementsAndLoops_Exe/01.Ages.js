function solve (age) {
    if (age < 0) {
        console.log("out of bounds");
        return;
    }

    let result;

    if (age <= 2) {
        result = "baby";
    } else if (age <= 13) {
        result = "child";
    } else if (age <= 19) {
        result = "teenager";
    } else if (age <= 65) {
        result = "adult";
    } else {
        result = "elder";
    }
    console.log(result);
}
