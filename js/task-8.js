// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const ref = {
    inputNumber: document.querySelector('input'),
    btnRender: document.querySelector('button[data-action="render"]'),
    btnDestroy: document.querySelector('button[data-action="destroy"]'),
    boxesGroup: document.querySelector('#boxes')
}

ref.inputNumber.addEventListener('input', createAmount);
// ref.btnRender.addEventListener('click');
// ref.btnDestroy.addEventListener('click');

let amount = 0;

// создание куба
const box = document.createElement('div');
box.style.boxSizing = 'border-box';
box.style.width = '30px';
box.style.height = '30px';
box.style.backgroundColor = 'tomato';

function onCreateAmount (event) {
    amount = event.target.value;
    return amount;
};


