const refs = {
    input: document.querySelector("#font-size-control"),
    text: document.querySelector('#text'),
}

refs.text.style.fontSize = refs.input.value + 'px';

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.text.style.fontSize = event.currentTarget.value + 'px';
    console.log(event.currentTarget.value);
}