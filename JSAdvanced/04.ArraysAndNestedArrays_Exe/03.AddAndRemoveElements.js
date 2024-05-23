function solve(arr) {
    let output = [];
    let num = 1;
    let actions = {
      "add": () =>  output.push(num++),
      "remove": () => {
          output.pop();
          num++;
      }
    };
    arr.forEach(e => actions[e]());

    if (output.length === 0) {
        console.log("Empty");
    } else {
        console.log(output.join("\n"));
    }
}
