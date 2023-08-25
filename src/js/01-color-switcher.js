const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

// Прослуховувачі на кнопки
btnStart.addEventListener('click', onClickBtnStart);
btnStop.addEventListener('click', onClickBtnStop);

btnStop.disabled = true;
// функції зміни кольору body
function changeBodyColor() {
  const bodyColor = getRandomHexColor();
  body.style.backgroundColor = bodyColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Функція старт
let timeInterval = 0;
function onClickBtnStart(evt) {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timeInterval = setInterval(() => {
    changeBodyColor()
  }, 1000);

};

// Функція стоп

function onClickBtnStop(evt) {
    btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timeInterval)
};