function solve(steps, footprintLength, speed) {
    let distance = steps * footprintLength / 1000;
    let restTime = Math.floor(distance * 1000 / 500);
    let time = distance /speed * 60 + restTime;
    let hours = Math.floor(time / 60);
    let minutes = Math.floor(time % 60);
    let seconds = Math.round((time - Math.floor(time)) * 60);
    let formattedHours = format(hours);
    let formattedMinutes = format(minutes);
    let  formattedSeconds = format(seconds);

    console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds}`);

    function format(value) {
        let output = "";
        if (value <= 9) {
            output+= 0;
        }
        output+= value;
        return output;
    }
}

