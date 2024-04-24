function solve(lostFights, helmetPrice, swordPrice, shieldPrice,
               armorPrice) {

    let helmets = Math.trunc(lostFights / 2);
    let swords = Math.trunc(lostFights / 3);
    let shields = Math.trunc(lostFights / 6);
    let armors = Math.trunc(lostFights / 12);

    let expenses = helmets * helmetPrice + swords * swordPrice +
        shields * shieldPrice + armors * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
