function solve(speed, area) {
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    if (speed <= limits[area]) {
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
        return;
    }
    let speedDifference = speed - limits[area];
    let status = getStatus(speedDifference);

    console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${limits[area]} - ${status}`);

    function getStatus(difference) {
        let status;
        if (difference <= 20) {
            status = "speeding";
        } else if (difference <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        return status;
    }
}
