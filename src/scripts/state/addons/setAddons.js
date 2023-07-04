export function setAddons(state, data) {
    // Save the keys in array
    data = Object.keys(data);
    state.addonsSelected = data;

    sessionStorage.setItem('data', JSON.stringify(state));
}