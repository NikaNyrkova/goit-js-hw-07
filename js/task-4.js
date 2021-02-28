// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const refs = {
    decrementBtnEl: document.querySelector('button[data-action="decrement"]'),
    incrementBtnEl: document.querySelector('button[data-action="increment"]'),
    valueEl: document.querySelector('#value')
}
let counterValue = Number(refs.valueEl.textContent);

refs.decrementBtnEl.addEventListener('click', onDecrement);
refs.incrementBtnEl.addEventListener('click', onIncrement);

function onDecrement() {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
}

function onIncrement() {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
}
