function solve() {
    let arr = [];

    let list = {
        add,
        remove,
        get,
        get size() {
            return arr.length;
        }
    };

    return list;


    function add(element) {
        arr.push(element);
        sortArr();
    }

    function remove(index) {
        if (isInBounds(index)) {
            arr.splice(index, 1);
        }
    }

    function get(index) {
        if (isInBounds(index)) {
            return arr[index];
        }
    }

    function getSize() {
        return arr.length;
    }

    function sortArr() {
        arr.sort((a, b) => a - b);
    }

    function isInBounds(index) {
        return index >= 0 && index < arr.length;
    }

}

let list = solve();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
