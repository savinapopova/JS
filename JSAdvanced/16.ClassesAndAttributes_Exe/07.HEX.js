class Hex {

    value;

    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        if (number instanceof Hex) {
            let newValue = number.valueOf() + this.value;
            return new Hex(newValue);
        }
        return new Hex(this.value + number);
    }

    minus(number) {
        if (number instanceof Hex) {
            let newValue = this.value - number.valueOf();
            return new Hex(newValue);
        }
        return new Hex(this.value - number);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}
