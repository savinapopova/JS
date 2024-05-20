function solve(data) {
    data.pop();

    let pattern = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/gm;
    let totalSum = 0;
    console.log("Bought furniture:")
    for (let element of data) {
        if (element.match(pattern) !== null) {

             let {item, price, quantity} = pattern.exec(element).groups;
            console.log(item);
            totalSum+= Number(price) * Number(quantity);
        }
    }

    console.log("Total money spend: " + totalSum.toFixed(2));
}

solve(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase']
)
