function solve(data) {

    let account = data[0].split(" ");

    let i = 1;
    let input = data[i].split(" ");
    let command = input[0];

    while (command !== "Play!") {
        let game = input[1];
        let gameIndex;
        switch (command) {
            case "Install":
                if (!account.includes(game)) {
                    account.push(game);
                }
                break;
            case "Uninstall":
                 gameIndex = account.indexOf(game);
                if (gameIndex !== -1) {
                    account.splice(gameIndex, 1);
                }
                break;
            case "Update":
                gameIndex = account.indexOf(game);
                if (gameIndex !== -1) {
                    account.splice(gameIndex, 1);
                    account.push(game);
                }
                break;
            case "Expansion":
                game = input[1].split("-")[0];
                let expansion = input[1].split("-")[1];
                 gameIndex = account.indexOf(game);

                if (gameIndex !== -1) {
                    expansion = `${game}:${expansion}`;
                    account.splice(gameIndex + 1, 0, expansion);
                }
                break;

        }

        i++;
        input = data[i].split(" ");
        command = input[0];
    }

    console.log(account.join(" "));

}
