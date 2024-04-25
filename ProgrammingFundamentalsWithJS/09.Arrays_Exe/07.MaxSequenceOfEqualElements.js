function solve(arr) {
    let sequences = [];
    let elements = [];
    elements.push(arr[0]);
    sequences.push(elements);

    for (let i = 1; i < arr.length; i++) {
     if (arr[i] === arr[i - 1]) {
         sequences[sequences.length - 1].push(arr[i]);
     } else {
         elements = [];
         elements.push(arr[i]);
         sequences.push(elements);
     }
    }
     let maxIndex = 0;
    let maxLength = 0;

    for (let i = 0; i < sequences.length; i++) {
        if (sequences[i].length > maxLength) {
            maxLength = sequences[i].length;
            maxIndex = i;
        }
    }
    console.log(sequences[maxIndex].join(" "));

}
