//Создаем пустой массив
let numbers = [];
//Заполняем массив числами
for (let step = -10; step < 11; step++) {
  numbers.push(`${step}`);
};
//Цикл по полученному массиву
for (let i = numbers.length-1; i>=0; i--) {
  //Удаляем отрицательные числа
  if (numbers[i] < 0){
    numbers.splice(i, 1);
  } else {
    //Возводим остальные в квадрат
    numbers[i] = numbers[i] ** 2;
  };
};
//Сортируем массив
numbers.sort(function (a, b) {
  return b-a;
  });
// Удаляем повторяющиеся элементы (но их и нет, мы уже удалили отрицательные числа)
let uniqueNumbers = numbers.filter((element, index) => {
    return numbers.indexOf(element) === index;
});

//Выведу оба массива, так видно, что повторяющихся нет
console.log(uniqueNumbers);
console.log(numbers);

