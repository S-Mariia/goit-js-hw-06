const input = document.querySelector('#validation-input');
input.placeholder = `Please enter ${input.dataset.length} symbols`;

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.add('invalid');
    };
}