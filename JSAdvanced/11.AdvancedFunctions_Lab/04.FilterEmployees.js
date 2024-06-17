function solve(data, criteria) {
    data = JSON.parse(data);
    let result;
    if (criteria === 'all') {
        result = data;

    } else {
        let [prop, value] = criteria.split("-");
        result = data.filter(e => e[prop] === value);
    }

    result.forEach((e, i) =>
        console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`) );
}
