function solve(text) {
   text.split(" ")
        .filter(w => w.startsWith("#") && w.length > 1)
        .map(w => w.slice(1))
        .filter(w => w.match("^[A-Za-z]+$"))
        .forEach(w => console.log(w));
}
