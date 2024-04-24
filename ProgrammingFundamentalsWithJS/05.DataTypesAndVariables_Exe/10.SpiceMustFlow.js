function solve(spices) {
    let days = 0;
    let totalAmount = 0;

    while (spices >= 100) {
        days++;
        totalAmount+= spices;
        totalAmount = consumeSpices(totalAmount);
        spices-= 10;
    }

    totalAmount = consumeSpices(totalAmount);

    console.log(days);
    console.log(totalAmount);



    function consumeSpices(totalAmount) {
        if (totalAmount > 26) {
            totalAmount-= 26
        } else {
            totalAmount = 0;
        }
        return totalAmount;
    }
}
