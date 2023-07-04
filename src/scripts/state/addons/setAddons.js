import { NULL } from "sass";

export function setAddons(state, data) {
    // Save the keys in array
    data !== null ? data = Object.keys(data) : data = null;
    
    state.addonsSelected = data;

    sessionStorage.setItem('data', JSON.stringify(state));
}