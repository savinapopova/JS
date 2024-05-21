function solve(arr) {
   console.log(sum());
   console.log(inverseSum());
   console.log(concat());

    function sum() {
        return arr.reduce((a, b) => a + b, 0);
    }

    function inverseSum() {
        return arr
            .map(n => 1 / n)
            .reduce((a, b) => a + b, 0);
    }

    function concat() {
        return arr
            .map(n => n.toString())
            .join("");
    }
}
