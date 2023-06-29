export function setAddons(state, data) {
    state.addonsSelected.id = data.id;
    state.addonsSelected.name = data.name;
    state.addonsSelected.category = data.category;

    sessionStorage.setItem('data', JSON.stringify(state));
}