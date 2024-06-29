function solve(tickets, criteria) {

    class Ticket {
        destination;
        price;
        status;


        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    return tickets
        .map(t => t.split("|"))
        .map(t => new Ticket(t[0], Number(t[1]), t[2]))
        .sort((a, b) => {
            if (typeof a[criteria] === 'string') {
                return a[criteria].localeCompare(b[criteria]);
            } else {
                return a[criteria] - b[criteria];
            }
        });
}
