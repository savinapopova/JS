function solve(data) {
    let courses = {};

    for (let element of data) {

        if (element.includes(": ")) {
            let tokens = element.split(": ");
            let course = tokens[0];
            let capacity = Number(tokens[1]);

            if (!courses.hasOwnProperty(course)) {
                courses[course] = {capacity};
                courses[course].students = [];
            } else {
                courses[course].capacity+= capacity;
            }
            continue;
        }

        element = element.split("] with email ");
        let username = element[0].split("[")[0];
        let credits = Number(element[0].split("[")[1]);
        let tokens = element[1].split(" joins ");
        let email = tokens[0];
        let course = tokens[1];

        if (!courses.hasOwnProperty(course) ||
        courses[course].capacity <= 0) {
            continue;
        }

        courses[course].capacity--;
        courses[course].students.push({username, credits, email});
    }

    Object.entries(courses)
        .sort((e1, e2) =>
        getStudentsCount(e2[0]) - getStudentsCount(e1[0]))
        .forEach(e => {
            console.log(`${e[0]}: ${e[1].capacity} places left`);
            e[1].students
                .sort((o1, o2) => o2.credits - o1.credits)
                .forEach(o => console.log(`--- ${o.credits}: ${o.username}, ${o.email}`));
        });

    function getStudentsCount(course) {
        return courses[course].students.length;
    }
}
