function solve(pass) {
    let isValid = true;
    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    let digitsCount = 0;
    let isLetterOrNumber = true;
    for (let char of pass) {
        let charCode = char.charCodeAt(0);
        if (!isLetter(charCode) && !isNumber(charCode)) {
            isValid = false;
            isLetterOrNumber = false;
            continue;
        }
        if (isNumber(charCode)) {
            digitsCount++;
        }
    }

    if (!isLetterOrNumber) {
        console.log("Password must consist only of letters and digits");
    }


    if (isValid && digitsCount >= 2) {
        console.log("Password is valid");
    } else if (digitsCount < 2) {
        console.log("Password must have at least 2 digits");
    }



    function isNumber(charCode) {
        return charCode >= 48 && charCode <= 57;
    }

    function isLetter(charCode) {
        return (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122);
    }
}
