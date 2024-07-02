class Textbox {

    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        this._value = '';

        this._elements.forEach(element => {
            element.addEventListener('input', (e) => {
                this.value = e.target.value;
            });
        });
    }


    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (let el of this.elements) {
            el.value = value;
        }
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }

}
