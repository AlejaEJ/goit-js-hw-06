const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
    const inputValue = validationInput.value;

    const desiredLength = validationInput.getAttribute('data-length');

    if (inputValue.length === Number(desiredLength)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});