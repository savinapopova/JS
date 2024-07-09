function solve() {

    class Figure {
        units;


        constructor() {
            this.units = 'cm';
        }

        get area() {
        }

        changeUnits(value) {
            this.units = value;

        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        radius;


        constructor(radius) {
            super();
            this.radius = radius;
        }

        changeUnits(value) {
            if (this.units === 'm') {
                if (value === 'cm') {
                    this.radius *= 100;
                } else if (value === 'mm') {
                    this.radius *= 1000;
                }
            } else if (this.units === 'cm') {
                if (value === 'm') {
                    this.radius /= 100;
                } else if (value === 'mm') {
                    this.radius *= 10;
                }
            } else if (this.units === 'mm') {
                if (value === 'm') {
                    this.radius /= 1000;
                } else if (value === 'cm') {
                    this.radius /= 10;
                }
            }
            super.changeUnits(value);


        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        width;
        height;


        constructor(width, height, units) {
            super();
            this.width = width;
            this.height = height;
            this.changeUnits(units);
        }

        get area() {
            let area = this.width * this.height;
            return area;
        }

        changeUnits(value) {
            if (this.units === 'm') {
                if (value === 'cm') {
                    this.width *= 100;
                    this.height *= 100;
                } else if (value === 'mm') {
                    this.width *= 1000;
                    this.height *= 1000;
                }
            } else if (this.units === 'cm') {
                if (value === 'm') {
                    this.width /= 100;
                    this.height /= 100;
                } else if (value === 'mm') {
                    this.width *= 10;
                    this.height *= 10;
                }
            } else if (this.units === 'mm') {
                if (value === 'm') {
                    this.width /= 1000;
                    this.height /= 1000;
                } else if (value === 'cm') {
                    this.width /= 10;
                    this.height /= 10;
                }
            }
            super.changeUnits(value);
        }

        toString() {
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}
