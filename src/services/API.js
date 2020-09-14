const API_KEY = '30b237d87e3e83a57cda70eef70c547d';

export function requestMovies(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?&query=${query}&api_key=${API_KEY}`)
                .then((response) => response.json())
}
