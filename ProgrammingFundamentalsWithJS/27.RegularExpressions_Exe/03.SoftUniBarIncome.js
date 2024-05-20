function solve(data) {
    data.pop();



    let pattern = /%(?<name>[A-Z][a-z]+)%[^\|\$%\.]*?<(?<item>\w+)>[^\|\$%\.]*?\|(?<count>\d+)\|[^\|\$%\.]*?(?<price>\d+(\.\d+)?)\$/;
    let sum = 0;

    for (let element of data) {
        let match = pattern.exec(element);

        if (match !== null) {
            let {name, item, count, price} = match.groups;
            let totalPrice = Number(count) * Number(price);
            sum+= totalPrice;
            console.log(`${name}: ${item} - ${totalPrice.toFixed(2)}`)
        }
    }

    console.log("Total income: " + sum.toFixed(2));
}

solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])
