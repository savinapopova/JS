function solve(input) {
    class Song {
        typeList;
        name;
        time;

        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    input.shift();
    let target = input.pop();

    let songs = input
        .map(str => str.split("_"))
        .map(e => new Song(e[0], e[1], e[2]));

    if (target !== "all") {
        songs = songs
            .filter(s => s.typeList === target);

    }

    songs
        .forEach(s => console.log(s.name));

}
