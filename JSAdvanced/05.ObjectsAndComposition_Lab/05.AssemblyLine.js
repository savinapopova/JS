function createAssemblyLine() {
let assemblyLine = {
    hasClima(car) {
        car.temp = 21;
        car.tempSettings = 21;
        car.adjustTemp = function () {
            if (this.temp < this.tempSettings) {
                this.temp++;
            } else if (this.temp > this.tempSettings) {
                this.temp--;
            }
        }
        return car;
    },
    hasAudio(car) {
        car.currentTrack = {
            name: null,
            artist: null
        };
        car.nowPlaying = function () {
            if (this.currentTrack.name !== null &&
            this.currentTrack.artist !== null) {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
            }
        }
        return car;
    },
    hasParktronic(car) {
        car.checkDistance = function (distance) {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (distance < 0.5) {
                console.log("Beep!");
            }
        }
        return car;
    }
};
  return assemblyLine;
}

