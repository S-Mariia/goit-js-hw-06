// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    userName: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', inputHandler);

function inputHandler(event) {
    refs.userName.textContent = event.currentTarget.value === '' ? "Anonymous" : event.currentTarget.value;
}
