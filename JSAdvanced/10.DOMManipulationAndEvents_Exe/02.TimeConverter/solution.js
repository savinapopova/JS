function attachEventsListeners() {
    let buttons = Array
        .from(document.querySelectorAll('[type = "button"]'));
    buttons
        .forEach(b => b.addEventListener('click', convert));
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let valuesConversion = {
        daysBtn (value) {
            return {
                days: value,
                hours: value * 24,
                minutes: value * 24 * 60,
                seconds: value * 24 * 60 * 60
            };
        },
        hoursBtn (value) {
            return {
                days: value / 24,
                hours: value,
                minutes: value * 60,
                seconds: value * 60 * 60
            };
        },
        minutesBtn (value) {
            return {
                days: value / 1440,
                hours: value / 60,
                minutes: value,
                seconds: value * 60
            };
        },
        secondsBtn (value) {
            return {
                days: value / 86400,
                hours: value / 3600,
                minutes: value / 60,
                seconds: value
            };
        }
    };

    function convert(event) {
        let btn = event.target;
        let value = Number(btn.parentElement
            .querySelector('[type = "text"]').value);
        let btnType = btn.getAttribute('id');
        let values = valuesConversion[btnType](value);
        daysInput.value = values.days;
        hoursInput.value = values.hours;
        minutesInput.value = values.minutes;
        secondsInput.value = values.seconds;
    }
}
