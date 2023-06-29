export function setFormData(state, data) {
    state.form.name = data.name;
    state.form.email = data.email;
    state.form.phone = data.phone;

    sessionStorage.setItem('data', JSON.stringify(state));
}