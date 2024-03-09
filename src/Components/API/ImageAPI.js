const BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_KEY = process.env.REACT_APP_PIXABAY_KEY;

class ImageAPI {
    static fetchImages(term = '') {
        return fetch(`${BASE_URL}?key=${PIXABAY_KEY}&q=${term}&image_type=photo`)
            .then(response => response.json())
            .then(json => json.hits)
            .catch(error => {
                console.log(error)
            });
    }
}

export { ImageAPI };