function RemoveError(errors, inputErrors) {
    errors.forEach((error) => {
        error.remove();
    });
    inputErrors.forEach((error) => {
        error.classList.remove('input__group__input-error');
    });
}
export default RemoveError;