function createComputerHierarchy() {

    class Part {
        manufacturer;

        constructor(manufacturer) {
            if (new.target === Part) {
                throw new Error('Cannot instantiate directly.');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Part {

        responseTime;


        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Part {
        width;
        height;


        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Battery extends Part {
        expectedLife;

        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer {
        manufacturer;
        processorSpeed;
        ram;
        hardDiskSpace;


        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error("Can't initialize an instance of Computer");
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = Number(processorSpeed);
            this.ram = Number(ram);
            this.hardDiskSpace = Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer {



        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = Number(weight);
            this.color = color;
            this.battery = battery;
        }


        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError('Invalid argument passed for battery');
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer {



        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }


        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError('Invalid argument passed for keyboard');
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError('Invalid argument passed for monitor');
            }
            this._monitor = value;
        }
    }



    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
