function solve(arr, commands) {
    let add = (index, num) => arr.splice(index, 0, num);
    let addMany = (index, arr2) => arr.splice(index, 0, ...arr2);
    let contains = (num) => console.log(arr.indexOf(num));
    let remove = (index) => arr.splice(index, 1);
    let shift = (count) => {
        for (let i = 0; i < count; i++) {
            arr.push(arr.shift());
        }
    };
    let sumPairs = () => {
        let newArr = [];
        if (arr.length % 2 !== 0) {
            arr.push(0);
        }
        for (let i = 0; i < arr.length - 1; i+= 2) {
            newArr.push(arr[i] + arr[i + 1]);
        }
        arr = newArr;
    };
    let print = () => console.log(`[ ${arr.join(", ")} ]`);

    for (let element of commands) {
        let commandLine = element.split(" ");
        let command = commandLine[0];

        let index;
        let num;

        switch (command) {
            case "add":
                index = Number(commandLine[1]);
                num = Number(commandLine[2]);
                add(index, num);
                break;
            case "addMany":
                index = Number(commandLine[1]);
                let arr2 = commandLine
                    .slice(2)
                    .map(Number);
                addMany(index, arr2);
                break;
            case "contains":
                num = Number(commandLine[1]);
                contains(num);
                break;
            case "remove":
                index = Number(commandLine[1]);
                remove(index);
                break;
            case "shift":
                let count = Number(commandLine[1]);
                shift(count);
                break;
            case "sumPairs":
                sumPairs();
                break;
            case "print":
                print();
                return;
        }
    }
}
