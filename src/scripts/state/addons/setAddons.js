export function setAddons(state, data) {
    state.addonsSelected = data;

    sessionStorage.setItem('data', JSON.stringify(state));
}