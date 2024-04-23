function solve(count, type, day) {
    let price;

    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    price  = count * 8.45;
                    break;
                case "Saturday":
                    price  = count * 9.80;
                    break;
                case "Sunday":
                    price  = count * 10.46;
                    break;
            }
            if (count >= 30) {
                price = price * 0.85;
            }
            break;
        case "Business":
            if (count >= 100) {
                count-= 10;
            }
            switch (day) {
                case "Friday":
                    price  = count * 10.90;
                    break;
                case "Saturday":
                    price  = count * 15.60;
                    break;
                case "Sunday":
                    price  = count * 16;
                    break;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    price  = count * 15;
                    break;
                case "Saturday":
                    price  = count * 20;
                    break;
                case "Sunday":
                    price  = count * 22.50;
                    break;
            }
            if (count >= 10 && count <= 20) {
                price = price * 0.95;
            }
            break;

    }

    console.log("Total price: " + price.toFixed(2));
}
