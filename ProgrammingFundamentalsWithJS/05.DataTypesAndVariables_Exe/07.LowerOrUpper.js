function solve(char) {
    let asciiCode = char.charCodeAt(0);

    if (asciiCode >= 65 && asciiCode <= 90) {
        console.log("upper-case")
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        console.log("lower-case")
    }
}
