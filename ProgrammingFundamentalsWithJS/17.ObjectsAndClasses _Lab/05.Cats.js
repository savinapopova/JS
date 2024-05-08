function solve(input) {

    class Cat {
       name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    input
        .map(s => s.split(" "))
        .map(a => new Cat(a[0], a[1]))
        .forEach(c => c.meow());
}
