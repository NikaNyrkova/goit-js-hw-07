// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.



const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onIsValid);

function onIsValid(event) {
    const inputTextLength = event.currentTarget.value.length;
    
    if (inputTextLength === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else if (inputTextLength === 0) {
        inputEl.classList.remove('valid', 'invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
