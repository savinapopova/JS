export function getUrl(action) {
    const baseUrl = 'http://localhost:3030';
    let urls = {
        register: baseUrl + '/users/register',
        login: baseUrl + '/users/login',
        logout: baseUrl + '/users/logout',
        getAllMovies: baseUrl + '/data/movies',
        add: baseUrl + '/data/movies',
        edit: baseUrl + '/data/movies/',
        delete: baseUrl + '/data/movies/',
        like: baseUrl + '/data/likes'
    };
    return urls[action];
}
