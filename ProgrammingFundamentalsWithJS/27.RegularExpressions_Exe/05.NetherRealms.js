function solve(data) {
    let daemonNames = data.split(/\s*,\s*/);
    let daemons = [];

    let charPattern = /[^\d\+\-\*\/\.]/mg;
    let damagePattern = /[-+]?\d+(?:\.\d+)?/gm;
    let multiplierPattern = /\*/gm;
    let dividerPattern = /\//gm;

    for (let daemonName of daemonNames) {
        let health = 0;
        let chars = daemonName.match(charPattern);
        for (let char of chars) {
            health+= char.charCodeAt(0);
        }
        let damage = 0;
        if (daemonName.match(damagePattern)) {
            daemonName.match(damagePattern)
                .map(Number)
                .forEach(n => damage+= n);
        }
        let multipliers = daemonName.match(multiplierPattern);
        if (multipliers !== null) {
            damage *= Math.pow(2, multipliers.length);
        }
        let dividers = daemonName.match(dividerPattern);
        if (dividers !== null) {
            damage /= Math.pow(2, dividers.length);
        }
        daemons.push({daemonName, health, damage});
    }

    daemons
        .sort((a, b) => a.daemonName.localeCompare(b.daemonName))
        .forEach(e =>
        console.log(`${e.daemonName} - ${e.health} health, ${e.damage.toFixed(2)} damage`));


}
