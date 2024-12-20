
async function makeRequest(url, options) {
    try {
        let response = await fetch(url, options);

        console.log(response.status);

        if (response.status === 204) {
            return null; // Връщаме null при успешна заявка без съдържание
        }



        if (!response.ok) {
            if (response.status === 403) {
                sessionStorage.clear();
            }
            let error = await response.json();
            throw new Error(error.message);
        }





        return await response.json();
    } catch (err) {
        throw err;
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
const del = async (url, token) => {
    let options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
            'X-Authorization': token
        }
    };
    return await makeRequest(url, options);
}



const put = async (url, body, token) => {

    let options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json',
            'X-Authorization': token},
        body: JSON.stringify(body)
    };
    return await makeRequest(url, options);
}


export { get, post, del, put};
