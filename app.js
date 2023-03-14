function fillArray() {
  const array = [];
  for (let i = 0; i < countOfElements; i++) {
    array.push(i);
  }
  return array;
}

function checkSpeedOfAction(action, label) {
  console.time(label);
  action();
  console.timeEnd(label);
}

const countOfElements = 10000000;

const arr = fillArray();

const set = new Set(arr);

const actions = [
  { action: () => arr.push(countOfElements), label: 'Добавление элемента в массив' },
  { action: () => arr.splice(555555, 1), label: 'Удаление элемента из массива' },
  { action: () => arr.find(num => num === 555555), label: 'Поиск элемента в массиве' },
  { action: () => set.add(countOfElements), label: 'Добавление элемента в Set' },
  { action: () => set.delete(555555), label: 'Удаление элемента из Set' },
  { action: () => set.has(555555), label: 'Поиск элемента в Set' }
]

actions.forEach(({ action, label }) => {
  checkSpeedOfAction(action, label);
})