function solve(data) {
    class Town {
        town;
        latitude;
        longitude;

        constructor(name, latitude, longitude) {
            this.town = name;
            this.latitude = Number(latitude).toFixed(2);
            this.longitude = Number(longitude).toFixed(2);
        }
    }

    data
        .map(e => e.split(" | "))
        .map(e => new Town(e[0], e[1], e[2]))
        .forEach(t => console.log(JSON.parse(JSON.stringify(t))));

}
