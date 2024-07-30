async function getInfo() {
    let stopId = document.getElementById('stopId').value;
    let stopNameDiv = document.getElementById('stopName');
    let list = document.getElementById('buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        if (!response.ok || !data.name || !data.buses) {
            throw new Error();
        }
        stopNameDiv.textContent = data.name;
        list.replaceChildren(...Object.entries(data.buses).map(createElement));
    } catch (error) {
        stopNameDiv.textContent = 'Error';
        list.replaceChildren();

    }

    function createElement(entry) {
       let [bus, time] = entry;
       let li = document.createElement('li');
       li.textContent = `Bus ${bus} arrives in ${time} minutes`;
       return li;
    }
}
