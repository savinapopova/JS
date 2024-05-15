function solve(data) {
    let armies = {};
    let armyNames = {};
    let leader;

    for (let element of data) {

        if (element.includes("arrives")) {
            leader = element.split(" arrives")[0];
                armies[leader] = {};
            continue;
        }

        if (element.includes(": ")) {
            let tokens = element.split(": ");
            leader = tokens[0];
            if (armies.hasOwnProperty(leader)) {
                tokens = tokens[1].split(", ");
                let armyName = tokens[0];
                let armyCount = Number(tokens[1]);
                armies[leader][armyName] = armyCount;
                armyNames[armyName] = leader;
            }
            continue;
        }

        if (element.includes(" + ")) {
            let tokens = element.split(" + ");
            let armyName = tokens[0];
            let armyCount = Number(tokens[1]);
            if (armyNames.hasOwnProperty(armyName)) {
                leader = armyNames[armyName];
                armies[leader][armyName]+= armyCount;
            }
            continue;
        }

        if (element.includes("defeated")) {
            leader = element.split(" defeated")[0];
            if (armies.hasOwnProperty(leader)) {
                let leaderArmies = armies[leader]
                for (let armyName in leaderArmies) {
                    delete armyNames[armyName];
                }
                delete armies[leader];
            }
        }
    }

    Object.entries(armies)
        .sort(([l1], [l2]) => getTotalCount(l2) -
        getTotalCount(l1))
        .forEach(e => {
            console.log(e[0] + ": " + getTotalCount(e[0]));
            Object.entries(e[1])
                .sort(([name1, count1], [name2, count2]) =>
                count2 - count1)
                .forEach(e => console.log(">>> " + e[0] + " - " + e[1]));
        });

    function getTotalCount(leader) {
        return Object.values(armies[leader])
            .reduce((a, b) => a + b, 0);
    }
}
