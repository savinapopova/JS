function solve(data) {

    const BITCOIN_PRICE = 11949.16;
    const GOLD_PRICE = 67.51;

    let totalBitcoins = 0;
    let bitcoins = 0;
    let day = 0;
    let money = 0;
    let dayOFFirstBuy = 0;
    let gold;

    for (let i = 0; i < data.length; i++) {
        day = i + 1;
        if (day % 3 === 0) {
            gold = data[i] * 0.7;
        } else {
            gold = data[i];
        }
        money+= gold * GOLD_PRICE;

        if (money >= BITCOIN_PRICE) {
            if (totalBitcoins === 0) {
                dayOFFirstBuy = day;
            }
            bitcoins = Math.floor(money / BITCOIN_PRICE);
            money = money - (BITCOIN_PRICE * bitcoins);
            totalBitcoins+= bitcoins;
            bitcoins = 0;
        }


    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (dayOFFirstBuy > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOFFirstBuy}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}
