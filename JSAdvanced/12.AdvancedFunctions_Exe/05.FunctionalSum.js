function add(a) {
    let sum = a;
    function calc(b) {
        sum += b;
        return calc;
    }
    calc.toString = () => sum;
    return calc;
}
