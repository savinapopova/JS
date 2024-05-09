class Laptop {
    info;
    isOn = false;
    quality;

    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
    }


    get price() {
        return 800 - this.info.age * 2 + this.quality * 0.5;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }
}

