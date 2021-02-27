// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const liEl = ingredients.map(ingridient => {
  const li = document.createElement('li');
  const ind = ingredients.indexOf(ingridient);
  li.textContent = ingredients[ind];
  return li;
});

ingredientsList.append(...liEl);
