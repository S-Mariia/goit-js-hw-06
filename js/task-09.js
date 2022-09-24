function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  text: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
}

refs.button.addEventListener('click', handleButtonChangeColorByClick)

function handleButtonChangeColorByClick() {
  const color = getRandomHexColor();

  refs.body.style.backgroundColor = color;
  refs.text.textContent = color;
}
