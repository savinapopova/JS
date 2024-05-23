function solve(arr) {
    let elements = [];

    for (let i = 0; i < arr.length; i+= 2) {
      elements.push(arr[i]);
    }
    console.log(elements.join(" "));
}
