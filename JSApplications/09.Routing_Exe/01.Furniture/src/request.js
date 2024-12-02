async function makeRequest(url, options) {
    try {
        let response = await fetch(url, options);

        console.log(response.status);

        if (response.status === 204) {
            return null; // Връщаме null при успешна заявка без съдържание
        }



        if (!response.ok) {
            let error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();
    } catch (e) {

        return alert(e.message);
    }
}

const get = async (url, token) => {
    let options = {
        method: 'GET',
        headers: {}
    };

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return await makeRequest(url, options);
}
const post = async (url, body,token) => {

    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    };

    if (token) {
        options.headers['X-Authorization'] = token;
    }
   return await makeRequest(url, options);
}
const del = (url) => makeRequest(url, { method: 'DELETE' });
const put = (url, body) => makeRequest(url, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(body)
});


export { get, post, del, put};
