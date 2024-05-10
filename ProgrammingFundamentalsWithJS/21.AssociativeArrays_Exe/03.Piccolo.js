function solve(data) {
    let parking = [];

    for (let element of data) {
        let [action, number] = element.split(", ");
        switch (action) {
            case "IN":
                if (!parking.includes(number)) {
                    parking.push(number);
                }

                break;
            case "OUT":
                let index = parking.indexOf(number);
                if (index !== -1) {
                    parking.splice(index, 1);
                }
                break;

        }
    }

    if (parking.length === 0) {
        console.log("Parking Lot is Empty");
        return;
    }

    parking
        .sort((a, b) => a.localeCompare(b))
        .forEach(n => console.log(n));
}
