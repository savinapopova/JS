function solve(data) {
    let users = [];
    let comments = {};

    for (let element of data) {

        if (element.includes("user ")) {
            let username = element.split("user ")[1];
            users.push(username);
            continue;
        }

        if (element.includes("article ")) {
            let article = element.split("article ")[1];
            comments[article] = [];
            continue;
        }

        element = element.split(" posts on ");
        let username = element[0];
        let article = element[1].split(": ")[0];
        let tokens = element[1].split(": ")[1].split(", ");
        let title = tokens[0];
        let content = tokens[1];

        if (users.includes(username) && comments.hasOwnProperty(article)) {
            comments[article].push({
                username,
                title,
                content
            });
        }
    }

    Object.entries(comments)
        .sort((e1, e2) =>
            e2[1].length - e1[1].length)
        .forEach(e => {
            console.log("Comments on " + e[0]);
            e[1]
                .sort((e1, e2) => e1.username.localeCompare(e2.username))
                .forEach(o => console.log(`--- From user ${o.username}: ${o.title} - ${o.content}`));
        });
}
