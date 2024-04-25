function solve(input) {
    let rooms = input[0].split("\|");
    let health = 100;
    let coins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let keyword = rooms[i].split(" ")[0];
        let value = Number(rooms[i].split(" ")[1]);

        switch (keyword) {
            case "potion":
                health+= value;
                if (health > 100) {
                    value = value - (health - 100);
                    health = 100;
                }
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins+= value;
                console.log( `You found ${value} coins.`);
                break;
            default:
                if (health - value <= 0) {
                    console.log(`You died! Killed by ${keyword}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
                health-= value;
                console.log(`You slayed ${keyword}.`);
                break;
        }
    }
    console.log("You've made it!");
    console.log("Coins:", coins);
    console.log("Health:", health);
}
