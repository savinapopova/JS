function solve(data) {
    class Employee {
        name;
        personalNumber;

        constructor(name) {
            this.name = name;
            this.personalNumber = name.length;
        }

        printInfo() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    data
        .map(n => new Employee(n))
        .forEach(e => e.printInfo());
}
