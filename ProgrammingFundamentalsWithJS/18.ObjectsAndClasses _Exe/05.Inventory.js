function solve(data) {
    class Hero {
        name;
        level;
        items

        constructor(name, level, items) {
            this.name = name;
            this.level = Number(level);
            this.items = items;
        }

        print() {
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items}`);
        }
    }

    data
        .map(e => e.split(" / "))
        .map(e => new Hero(e[0], e[1], e[2]))
        .sort((a, b) => a.level - b.level)
        .forEach(h => h.print());
}
