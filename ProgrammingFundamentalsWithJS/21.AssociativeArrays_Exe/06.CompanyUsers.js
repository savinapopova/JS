function solve(data) {
    let register = {};
    for (let element of data) {
        [company, id] = element.split(" -> ");
        if (!register.hasOwnProperty(company)) {
            register[company] = new Set();
        }
        register[company].add(id);
    }

    Object.keys(register)
        .sort((a, b) => a.localeCompare(b))
        .forEach(k => {
            console.log(k);
            Array.from(register[k])
                .forEach(i => console.log("--", i));
        })
}
