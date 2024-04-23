function solve(base, increment) {

    let layer = base;
    let stone = 0;
    let step = 0;
    let marble = 0
    let gold = 0;
    let lapis = 0;

    while (layer >= 1) {
        step++;

        if (layer >= 3) {
            stone += (layer - 2) * (layer - 2) * increment;
            if (step % 5 === 0) {
                lapis+= (layer * 4 - 4) * increment;
            } else {
                marble+= (layer * 4 - 4) * increment;
            }
        } else {
            gold+= layer * layer * increment;
        }
        layer-= 2;

    }

    console.log("Stone required: " + Math.ceil(stone));
    console.log("Marble required: " + Math.ceil(marble));
    console.log("Lapis Lazuli required: " + Math.ceil(lapis));
    console.log("Gold required: " + Math.ceil(gold));
    console.log("Final pyramid height: " + Math.floor(step * increment));
}
