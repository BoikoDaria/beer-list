import { FAVORITE_KEY } from './constants';

export default () => {
    let res = [];

    try {
        const items = localStorage.getItem(FAVORITE_KEY);
        res = JSON.parse(items) || [];
    } catch (e) {
        console.warn('Reading of favorites is failed with error: ', e && e.message);    
    }

    return res;
}
