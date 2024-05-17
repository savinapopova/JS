function solve(data) {
    let firstCharCode = Math
        .min(data[0].charCodeAt(0), data[1].charCodeAt(0));
    let secondCharCode = Math
        .max(data[0].charCodeAt(0), data[1].charCodeAt(0));

    let string = data[2];
    let sum = 0;

    for (let char of string) {
        let charCode = char.charCodeAt(0);

        if (charCode > firstCharCode && charCode < secondCharCode) {
            sum+= charCode;
        }
    }

    console.log(sum);
}
