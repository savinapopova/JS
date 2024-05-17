function solve(data) {
    data.pop();
    let key = data.shift()
        .split(/ +/)
        .map(Number);
    const regexTreasure = /&(?<treasure>[^&]+)&/;
    const regexPlace = /<(?<place>[^>]+)>/;

    for (let element of data) {
        let decrypted = "";
        if (key.length === 0) {
            decrypted = element;
        } else {
            let index = 0;
            for (let char of element) {

                let newCharCode = char.charCodeAt(0) - key[index];
                if (newCharCode < 0) {
                    newCharCode = 0;
                }
                decrypted += String
                    .fromCharCode(newCharCode);
                index++;
                if (index === key.length) {
                    index = 0;
                }
            }
        }


        const treasureMatch = regexTreasure.exec(decrypted);
        const placeMatch = regexPlace.exec(decrypted);

        if (treasureMatch && placeMatch) {
            const treasure = treasureMatch.groups.treasure;
            const place = placeMatch.groups.place;
            console.log(`Found ${treasure} at ${place}`);
        }
    }
}
