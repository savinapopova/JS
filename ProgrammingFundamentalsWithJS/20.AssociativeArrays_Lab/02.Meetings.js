function solve(data) {
    data = data
        .map(e => e.split(" "));

    let planner = {};

    for (let [day, name] of data) {
        if (planner.hasOwnProperty(day)) {
            console.log(`Conflict on ` + day + "!");
        } else {
            planner[day] = name;
            console.log("Scheduled for " + day);
        }
    }

    for (let [day, name] of Object.entries(planner)) {
        console.log(day, "->", name);
    }
}
