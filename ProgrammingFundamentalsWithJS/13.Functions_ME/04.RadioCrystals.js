function solve(input) {
    let target = input.shift();
    let thickness;
    let cut = () => thickness / 4;
    let lap = () => thickness * 0.8;
    let grind = () => thickness - 20;
    let etch = () => thickness - 2;
    let xRay = () => thickness + 1;
    let transportingAndWashing = () => {
        console.log("Transporting and washing");
        return Math.floor(thickness);
    }


    let count;

    for (let i = 0; i < input.length; i++) {
       thickness = input[i];
         count = 0;
        console.log(`Processing chunk ${thickness} microns`);
        while (thickness / 4 >= target - 1) {
            thickness = cut();
            count++;
        }
        if (count > 0) {
            console.log(`Cut x${count}`);
            thickness = transportingAndWashing();
        }

        count = 0;


        while (thickness * 0.8 >= target - 1) {
            thickness = lap();
            count++;
        }
        if (count > 0) {
            console.log(`Lap x${count}`);
            thickness = transportingAndWashing();
        }

        count = 0;

        while (thickness - 20 >= target - 1) {
            thickness = grind();
            count++;
        }
        if (count > 0) {
            console.log(`Grind x${count}`);
            thickness = transportingAndWashing();
        }

        count = 0;

        while (thickness - 2 >= target - 1) {
            thickness = etch();
            count++;
        }
        if (count > 0) {
            console.log(`Etch x${count}`);
            thickness = transportingAndWashing();
        }

        count = 0;

        if (thickness === target - 1) {
            thickness = xRay();
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${thickness} microns`)
    }
}
