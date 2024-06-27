function solve(httpObj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messagePattern = /^[^<>\\&'"]*$/;
    let uriPattern = /^(?:[a-zA-Z0-9.]+|\*)$/;

    let method = httpObj.method;
    if (!httpObj.hasOwnProperty("method") || !methods.includes(method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    let uri = httpObj.uri;
    if (!httpObj.hasOwnProperty("uri") || !uri.match(uriPattern)
        || uri === ''
        ) {
        throw new Error("Invalid request header: Invalid URI");
    }

    let version = httpObj.version;
    if (!httpObj.hasOwnProperty("version") || !versions.includes(version)) {
        throw new Error("Invalid request header: Invalid Version");
    }

    let message = httpObj.message;
    if (!httpObj.hasOwnProperty("message") || !message.match(messagePattern)) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return httpObj;
}
