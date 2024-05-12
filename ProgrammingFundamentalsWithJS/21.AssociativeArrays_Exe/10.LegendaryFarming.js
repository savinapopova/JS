function solve(data) {

    const TARGET = 250;

    let materials = {
        "fragments": 0,
        "shards": 0,
        "motes": 0
    };
    let junk = {};
    let legendaryItems = {
        shards: "Shadowmourne",
        fragments: "Valanyr",
        motes: "Dragonwrath"
    };


    data = data.split(" ");
    let itemObtained;

    for (let i = 0; i < data.length - 1; i+= 2) {
        let count = Number(data[i]);
        let material = data[i + 1].toLowerCase();

        if (!materials.hasOwnProperty(material)) {
            if (!junk.hasOwnProperty(material)) {
                junk[material] = count;
            } else {
                junk[material]+= count;
            }
            continue;
        }

        materials[material]+= count;
        let goal = Object.keys(materials)
            .filter(k => materials[k] >= 250)[0];

        if (goal === undefined) {
            continue;
        }
        materials[material]-= TARGET;
        itemObtained = legendaryItems[material];
        break;
    }

    console.log(itemObtained + " obtained!");

    let comparator = ([material1, count1], [material2, count2]) => {
        let result;
        result = count2 - count1;
        if (result === 0) {
            result = material1.localeCompare(material2);
        }
        return result;
    };

    Object.entries(materials)
        .sort(comparator)
        .forEach(e => console.log(e[0] + ": " + e[1]));
    Object.entries(junk)
        .sort( ([material1], [material2]) =>
        material1.localeCompare(material2))
        .forEach(e => console.log(e[0] + ": " + e[1]));
}
