/**
 * Created by Konstantin on 21.05.2017.
 */
import config from '../config.js';


export default class LS
{
    static get(field)
    {
        if (LS._isExist()) {
            const data = JSON.parse(localStorage.getItem(config.localStorage.name));
            if(!field) return data;
            if(data[field]) return data[field];
            return undefined;
        }

        return undefined;
    }

    static set(field, data = {})
    {
        let dataToStorage = {};
        if (field) {
            dataToStorage = LS.get();
            if (!dataToStorage) dataToStorage = {};
            else dataToStorage[field] = data;
        } else {
            dataToStorage = data;
        }

        localStorage.setItem(config.localStorage.name, JSON.stringify(dataToStorage));
    }

    static _isExist()
    {
        return localStorage.getItem(config.localStorage.name) ? true : false;
    }
}
