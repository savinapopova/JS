class List {

    list;
    size;


    constructor(list, size) {
        this.list = [];
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.sortList();
        this.size++;

        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error();
        }
        this.list.splice(index, 1);
        this.size--;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error();
        }

        return this.list[index];
    }

    sortList() {
        this.list.sort((a,b) => a - b);
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
