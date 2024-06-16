function attachEventsListeners() {
    let convertBtn = document.getElementById('convert');
    let fromInput = document.getElementById('inputDistance');
    let toInput = document.getElementById('outputDistance');
    let fromOptions = Array.from(document
        .getElementById('inputUnits').children);
    let toOptions = Array.from(document
        .getElementById('outputUnits').children);

    convertBtn.addEventListener('click', convert);

    let convertions = {
        km(distance) {
            return {
                km: distance,
                m: distance * 1000,
                cm: distance * 100000,
                mm: distance * 1000000,
                mi: distance * 1000 / 1609.34,
                yrd: distance * 1000 / 0.9144,
                ft: distance * 1000 / 0.3048,
                in: distance * 1000 / 0.0254
            };
        },
        m(distance) {
            return {
                km: distance / 1000,
                m: distance,
                cm: distance * 100,
                mm: distance * 1000,
                mi: distance / 1609.34,
                yrd: distance / 0.9144,
                ft: distance / 0.3048,
                in: distance / 0.0254
            };
        },
        cm(distance) {
            return {
                km: distance / 100000,
                m: distance / 100,
                cm: distance,
                mm: distance * 10,
                mi: distance / 160934,
                yrd: distance / 91.44,
                ft: distance / 30.48,
                in: distance / 2.54
            };
        },
        mm(distance) {
            return {
                km: distance / 1000000,
                m: distance / 1000,
                cm: distance / 10,
                mm: distance,
                mi: distance / 1609340,
                yrd: distance / 914.4,
                ft: distance / 304.8,
                in: distance / 25.4
            };
        },
        mi(distance) {
            return {
                km: distance * 1609.34,
                m: distance * 1609.34,
                cm: distance * 160934,
                mm: distance * 1609340,
                mi: distance,
                yrd: distance * 1760,
                ft: distance * 5280,
                in: distance * 63360
            };
        },
        yrd(distance) {
            return {
                km: distance * 0.0009144,
                m: distance * 0.9144,
                cm: distance * 91.44,
                mm: distance * 914.4,
                mi: distance / 1760,
                yrd: distance,
                ft: distance * 3,
                in: distance * 36
            };
        },
        ft(distance) {
            return {
                km: distance * 0.0003048,
                m: distance * 0.3048,
                cm: distance * 30.48,
                mm: distance * 304.8,
                mi: distance / 5280,
                yrd: distance / 3,
                ft: distance,
                in: distance * 12
            };
        },
        in(distance) {
            return {
                km: distance * 0.0000254,
                m: distance * 0.0254,
                cm: distance * 2.54,
                mm: distance * 25.4,
                mi: distance / 63360,
                yrd: distance / 36,
                ft: distance / 12,
                in: distance
            };
        }
    }

    function convert() {
        let fromUnit = fromOptions.find(o => o.selected).value;
        let toUnit = toOptions.find(o => o.selected).value;
        let distance = Number(fromInput.value);
        let result = convertions[fromUnit](distance)[toUnit];
        toInput.value = result;

    }

}
