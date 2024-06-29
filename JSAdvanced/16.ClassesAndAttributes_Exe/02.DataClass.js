class Request {
    method;
    uri;
    version;
    message;
    response;
    fulfilled = false;


    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
}
