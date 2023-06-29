export function setPlanData(state, data) {
    state.planSelected.id = data.id;
    state.planSelected.name = data.name;
    state.planSelected.category = data.category;

    sessionStorage.setItem('data', JSON.stringify(state));
}