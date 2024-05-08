function solve(arr1, arr2) {

    let products = {};

    for (let i = 0; i < arr1.length - 1; i+= 2) {
        products[arr1[i]] = Number(arr1[i + 1]);
    }

    for (let i = 0; i < arr2.length - 1; i+= 2) {
        if (products.hasOwnProperty(arr2[i])) {
            products[arr2[i]]+= Number(arr2[i + 1]);
        } else {
            products[arr2[i]] = Number(arr2[i + 1]);
        }
    }

    for (let [item, quantity] of Object.entries(products)) {
        console.log(item, "->", quantity);
    }
}
