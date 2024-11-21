async function makeRequest(url, options) {
    try {
        let response = await fetch(url, options);

        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();
    } catch (e) {
        alert(e.message);
        return;

    }
}

const get = (url) => makeRequest(url, { method: 'GET' });
const post = (url, body) => makeRequest(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
});

export { get, post };
