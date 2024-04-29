function solve(grade) {
    let note;
    if (grade < 3) {
        grade = 2;
        note = "Fail";
    } else {
        if (grade < 3.5) {
            note = "Poor";
        } else if (grade < 4.5) {
            note = "Good";
        } else if (grade < 5.5) {
            note = "Very good";
        } else {
            note = "Excellent";
        }
        grade = grade.toFixed(2);
    }
    console.log(`${note} (${grade})`);
}
