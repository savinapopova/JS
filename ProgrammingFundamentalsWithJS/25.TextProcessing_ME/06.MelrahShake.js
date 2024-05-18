function solve(data) {
    let string = data[0];
    let pattern = data[1];

    while (pattern !== ""  && string.length >= pattern.length * 2) {
        let firstIndex = string.indexOf(pattern);
        let lastIndex = string.lastIndexOf(pattern);
       if (firstIndex === -1 || lastIndex === -1 || firstIndex === lastIndex) {
           break;
       }
       string = string
           .slice(0, firstIndex) +
       string.slice(firstIndex + pattern.length, lastIndex)
       + string.slice(lastIndex + pattern.length);

       let indexToRemove = Math.floor(pattern.length / 2);
       pattern = pattern
           .slice(0, indexToRemove) +
           pattern.slice(indexToRemove + 1);
       console.log("Shaked it.");

    }
    console.log("No shake.");
    console.log(string);

}

solve(['mm',
    ''])
