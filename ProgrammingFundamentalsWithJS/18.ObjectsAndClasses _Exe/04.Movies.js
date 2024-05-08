function solve(data) {
    let movies = [];

    for (let element of data) {
        let line = element.split(" ");

        if (line[0] === "addMovie") {
            line.shift();
            let name = line.join(" ");
            let movie = {
                name
            };
            movies.push(movie)
            continue;
        }

        if (line.includes("directedBy")) {
            setProperty(line, "directedBy", "director");
            continue;
        }

        if (line.includes("onDate")) {
            setProperty(line, "onDate", "date");
        }
    }

    movies
        .filter(m => m.hasOwnProperty("director") && m.hasOwnProperty("date"))
        .forEach(m => console.log(JSON.stringify(m)));

    function getMovie(name) {
        return movies.filter(m => m.name === name)[0];
    }

    function setProperty(line, keyword, property) {
        let index = line.indexOf(keyword);
        let name = line.slice(0, index).join(" ");
        let movie = getMovie(name);

        if (movie) {
            let director = line.slice(index + 1).join(" ");
            movie[property] = director;
        }
    }
}
