const refs = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
    currentValue: document.querySelector("#value"),
}

let counterValue = 0;

refs.decrementButton.addEventListener('click', onDecrementButtonClick);
refs.incrementButton.addEventListener('click', onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= 1;
    refs.currentValue.textContent = counterValue;
}
function onIncrementButtonClick() {
    counterValue += 1;
    refs.currentValue.textContent = counterValue;
}