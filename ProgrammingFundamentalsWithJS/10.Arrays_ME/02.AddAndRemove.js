function solve(arr) {
    let num = 1;
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        switch (command) {
            case "add":
                output.push(num);
                break;
            case "remove":
                if (output.length > 0) {
                    output.pop();
                }
                break;
        }
        num++;
    }
    if (output.length > 0) {
        console.log(output.join(" "));
    } else {
        console.log("Empty");
    }
}
