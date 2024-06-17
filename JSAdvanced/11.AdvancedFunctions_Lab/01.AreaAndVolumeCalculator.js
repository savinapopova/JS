function solve(areaFunc, volFunc, data) {

    data = JSON.parse(data);
    let result = [];

    for (let element of data) {
        let area = areaFunc.call(element);
        let volume = volFunc.call(element);
        result.push({area, volume});
    }

    return result;

}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}








