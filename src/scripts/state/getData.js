import { setData } from "./setData";
export function getData() {
    const dataStore = sessionStorage.getItem('data');
    const jsonData = JSON.parse(dataStore);

    if (dataStore !== null) {
        return jsonData;
    } else {
        setData();
        return JSON.parse(sessionStorage.getItem('data'));
    }
}