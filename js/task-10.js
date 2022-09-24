const refs = {
  container: document.querySelector('#boxes'),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  input: document.querySelector('input'),
}

refs.createButton.addEventListener('click', onCreateButtonClick);
refs.destroyButton.addEventListener('click', onDestroyButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const arrOfBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = 30 + 10*i + "px";
    div.style.height = 30 + 10*i + "px";
    div.style.backgroundColor = getRandomHexColor();

    arrOfBoxes.push(div);
  }

  refs.container.append(...arrOfBoxes);
}

function onCreateButtonClick() {
  refs.container.innerHTML = '';

  const numberOfBoxes = Number(refs.input.value);
  createBoxes(numberOfBoxes);
}

function onDestroyButtonClick() {
  refs.container.innerHTML = '';
  refs.input.value = '';
}

