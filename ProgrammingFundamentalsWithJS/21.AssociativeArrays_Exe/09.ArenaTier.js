function solve(data) {
    let gladiatorPool = {};
    data.pop();

    for (let element of data) {
        let tokens;
        if (element.includes("->")) {
            tokens = element.split(" -> ");
            let gladiator = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);

            if (gladiatorPool.hasOwnProperty(gladiator) &&
            gladiatorPool[gladiator].hasOwnProperty(technique)) {
                if (gladiatorPool[gladiator][technique] < skill) {
                    gladiatorPool[gladiator][technique] = skill;
                }
                continue;
            }

            if (!gladiatorPool.hasOwnProperty(gladiator)) {
                gladiatorPool[gladiator] = {};
            }
            gladiatorPool[gladiator][technique] = skill;

            continue;
        }

        let [gladiator1, gladiator2] = element.split(" vs ");

        if (gladiatorPool.hasOwnProperty(gladiator1) &&
        gladiatorPool.hasOwnProperty(gladiator2)) {
            if (haveTechniquesInCommon(gladiator1, gladiator2)) {
                let points1 = getPoints(gladiator1);
                let points2 = getPoints(gladiator2);
                if (points1 > points2) {
                    delete gladiatorPool[gladiator2];
                } else if (points2 > points1) {
                    delete gladiatorPool[gladiator1];
                }
            }

        }

    }

    let techniqueComparator = ([t1, s1], [t2, s2]) => {
        let result;
        result = s2 - s1;
        if (result === 0) {
            result = t1.localeCompare(t2);
        }
        return result;
    }

    Object.keys(gladiatorPool)
        .sort((a, b) =>
            getPoints(b) - getPoints(a))
        .forEach(g => {
            console.log(`${g}: ${getPoints(g)} skill`);
            Object.entries(gladiatorPool[g])
                .sort(techniqueComparator)
                .forEach(e => console.log(`- ${e[0]} <!> ${e[1]}`));
        })


    function getPoints(gladiator) {
        return Object.values(gladiatorPool[gladiator])
            .reduce((a, b) => a + b, 0);
    }

    function haveTechniquesInCommon(gladiator1, gladiator2) {
        let techniques1 = Object.keys(gladiatorPool[gladiator1]);
        let techniques2 = Object.keys(gladiatorPool[gladiator2]);
        let merged = new Set([...techniques1, ...techniques2]);

       return  merged.size < techniques1.length + techniques2.length;
    }
}
