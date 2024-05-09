function solve(data) {

    let catalogue = {};

    for (let datum of data) {
        datum = datum.split(" : ");
        let char = datum[0].charAt(0);
        if (!catalogue.hasOwnProperty(char)) {
            catalogue[char] = {};
        }
        catalogue[char][datum[0]] = datum[1];
    }
    let keys = Object.keys(catalogue)
        .sort((a, b) => a.localeCompare(b));

    for (let letter of keys) {
        console.log(letter);
        Object.keys(catalogue[letter])
            .sort((a, b) => a.localeCompare(b))
            .forEach(k => console.log(`  ${k}: ${catalogue[letter][k]}`));
    }
}
