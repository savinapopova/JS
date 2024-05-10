function solve(data) {
    let vipList = [];
    let regularList = [];

    let entry = data.shift();
    while (entry !== "PARTY") {
        let list = getList(entry);
        list.push(entry);
        entry = data.shift();
    }

    for (let guest of data) {
        let list = getList(guest);
        removeGuest(guest, list);
    }

    console.log(vipList.length + regularList.length);
    vipList.forEach(g => console.log(g));
    regularList.forEach(g => console.log(g));

    function getList(entry) {
        let code = entry.charCodeAt(0);
        if (code >= 48 && code <= 57) {
            return vipList;
        }
        return regularList;
    }


    function removeGuest(guest, list) {
        let index = list.indexOf(guest);
        if (index !== -1) {
            list.splice(index, 1);
        }
    }

}
