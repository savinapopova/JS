function solve(text) {
    let tokens = text.split("\\");
    let file = tokens.pop().split('.');
    let extension = file.pop();
    let fileName = file.join('.');

    console.log("File name: " + fileName);
    console.log("File extension: " + extension);

}
