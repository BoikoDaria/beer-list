export default () => {
    return fetch('https://api.punkapi.com/v2/beers?ibu_gt=30&food=taco').then((response) => {
        return response.json && response.json();
    }).catch((error) => { 
        console.warn(error);
    })
}
