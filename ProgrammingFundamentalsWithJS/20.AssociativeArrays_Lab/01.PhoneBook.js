function solve(data) {
    let phonebook = {};
    data
        .map(e => e.split(" "))
        .forEach(e => phonebook[e[0]] = e[1]);
    for (let contact in phonebook) {
        console.log(contact, "->", phonebook[contact]);
    }
}
