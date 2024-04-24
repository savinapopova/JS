function solve(radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let  area = Math.PI * radius *
        (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));

    console.log("volume = " + volume.toFixed(4));
    console.log("area = " + area.toFixed(4));
}
