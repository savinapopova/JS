function solve(data) {
    class Flight {
        number;
        destination;
        status;


        constructor(number, destination) {
            this.number = number;
            this.destination = destination;
        }

        print() {
            console.log(`{ Destination: '${this.destination}', Status: '${this.status}' }`);
        }
    }

    let flights = {};
        data[0]
        .map(d => d.split(" "))
        .map(d => new Flight(d.shift(), d.join(" ")))
            .forEach(f => flights[f.number] = f);

    for (let datum of data[1]) {
        datum = datum.split(" ");
        let number = datum[0];
        let status = datum[1];

        if (flights.hasOwnProperty(number)) {
            flights[number].status = status;
        }
    }
    let statusToCheck = data[2][0];

    if (statusToCheck === "Ready to fly") {
        Object.values(flights)
            .filter(f => f.status === undefined)
            .forEach(f => f.status = "Ready to fly");
    }
        Object.values(flights)
            .filter(f => f.status === statusToCheck)
            .forEach(f => f.print());

}
