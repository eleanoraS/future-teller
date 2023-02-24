//Функция, выводящая текст

// let test1 = 'Мое прекрасное предсказание';
// document.write(test1);

//Простой рандомайзер чисел от 0 до 10
let numRandomizer10 = function () {
  num3 = Math.trunc(Math.random() * 11);

  return num3;
};

// let numRandomizer10f = function () {
//    num3 = Math.trunc(Math.random() * 11);

//       return num3;
//    }
console.log(numRandomizer10());
// console.log(numRandomizer10f());
//Самый простой генератор предсказания
// if (numRandomizer10() <= 5) {
//    document.write('Тебе сегодня повезет');
// } else {
//    document.write('День не хороший, а замечательный');
// }

// Теперь нужно создать по массиву на каждый из предметов предсказания, индекс брать из рандомайзера, => выводить на экран фразу из соединения рандомных слов

const person = [
  'Любимый',
  'Друг',
  'Сосед',
  'Подруга',
  'Учитель',
  'Незнакомец',
  'Враг',
  'Сестра',
  'Мать',
  'Отец',
  'Незнакомка',
];

const action = [
  'позвонит',
  'придет',
  'попросит об услуге',
  'загрустит',
  'создаст проблемы',
  'решит проблемы',
  'поможет',
  'захочет увидеться',
  'расскажет тайну',
  'вызнает секреты',
  'выдаст себя',
];

console.log(person[numRandomizer10()]);
// console.log(action[numRandomizer10f()]);

// document.write(`Привет. Я Элеанора - твой проводник в мир предсказаний. Сегодня особенный день. Я расскажу тебе, что будет. ${person[numRandomizer10()]} ${action[numRandomizer10()]}. Имей это в виду.`)

//На этом этапе -- все работает корректно!! При каждом запуске рандомайзер дает новое число, т.о. 2 рандомайзер  не нужен. Т.о., код состоит  из 4 блоков: функция рандомайзера, два массива и вывод текста

let oracle = `${person[numRandomizer10()]} ${
  action[numRandomizer10()]
}. Имей это в виду.`;

const eventHandler = function () {
  let customerNumber = Number(document.querySelector('.number-input').value);
  //   console.log(typeof customerNumber);
  let prophecyNumber = Math.ceil(customerNumber * (Math.random() * 10)) / 2;
  console.log(prophecyNumber);
  if (prophecyNumber % 2 == 0) {
    document.getElementById('prophecy').innerHTML = 'Звезды благоволят тебе.';
  } else {
    document.getElementById('prophecy').innerHTML = 'Звезды молчат.';
  }
  //   console.log(document.querySelector('.number-input').value);
};

document.querySelector('.clk-btn').addEventListener('click', eventHandler);

document.getElementById('oracle').innerHTML = oracle;
//Немного улучшен код, изменено на более корректный getElementByID и часть фразы унесена в html файл

//Еще немного улучшен код (или ухудшен), добавлен простенький двухвариантный рандомайзер с инпутом. С этим можно еще поиграть!
