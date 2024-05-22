function solve(...arr) {
    let num = Number(arr.shift());

    let commands = {
      "chop": () => num / 2,
      "dice": () => Math.sqrt(num),
      "spice": () => num + 1,
      "bake": () => num * 3,
      "fillet": () => num - 20 / 100 * num
    };

    for (let command of arr) {
        num = commands[command]();
        console.log(num);
    }
}
