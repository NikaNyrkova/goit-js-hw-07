// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const inputControl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputControl.min = 10;
inputControl.max = 80;
inputControl.value = 30;
inputControl.step = 10;

inputControl.addEventListener('input', onChangeFontSizeTextEl);

function onChangeFontSizeTextEl(event) {
    textEl.style.fontSize = Number(event.currentTarget.value) + 'px';
};