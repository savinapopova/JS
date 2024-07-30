function solve() {
    let busId = 'depot';
    let url = `http://localhost:3030/jsonstore/bus/schedule/`;
    let stopField = document.querySelector(`#info span`);
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let  data;


    async function depart() {
        try {
            let response = await fetch(url + busId);
            data = await response.json();
            if (!response.ok || !data.name || !data.next) {
                throw new Error();
            }
            console.log(data);
            busId = data.name;
            stopField.textContent = `Next stop ${busId}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            stopField.textContent = 'Error';
        }
    }

    function arrive() {
        stopField.textContent = `Arrived at ${busId}`;
        busId = data.next;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
