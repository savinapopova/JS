function solve(data, actions) {
    actions = actions
        .map(a => a.split(" "));
    let commands = {
        "Open": (tab) => {
            data["Open Tabs"].push(tab);
            data["Browser Logs"].push("Open " + tab);
        },
        "Close": (tab) => {
            let opened = data["Open Tabs"];
            if (opened.includes(tab)) {
                let index = opened.indexOf(tab);
                opened.splice(index, 1);
                data["Recently Closed"].push(tab);
                data["Browser Logs"].push("Close " + tab);
             }
        },
        "Clear": () => {
            data["Open Tabs"].length = 0;
            data["Recently Closed"].length = 0;
            data["Browser Logs"].length = 0;
        }
    }

    for (let action of actions) {
        let command = action.shift();
        let tab = action.join(" ");
        commands[command](tab);
    }

    console.log()

}

solve({"Browser Name":"Mozilla Firefox",
        "Open Tabs":["YouTube"],
        "Recently Closed":["Gmail", "Dropbox"],
        "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)
