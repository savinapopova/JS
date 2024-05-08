class Storage {

    capacity;
    storage = [];
    totalCost = 0;


    constructor(capacity) {
        this.capacity = capacity;
    }

    addProduct(product) {
        if (this.capacity - product.quantity >= 0) {
            this.storage.push(product);
            this.capacity-= product.quantity;
            this.totalCost+= product.price * product.quantity;
        }

    }

    getProducts() {
        return this.storage
            .map(p => JSON.stringify(p))
            .join("\n");
    }

}
