function AppendError(input, message) {
    input.children[1].classList.add('input__group__input-error');

    const error = document.createElement('span');
    error.classList.add('error');
    error.innerText = message;
    input.appendChild(error);
}

export default AppendError;