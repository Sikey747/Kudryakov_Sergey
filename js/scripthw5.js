// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//   а вторым - сколько элементов должно быть в массиве.
//   Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].


function myArrayFill(a,b) {
  let arr1 = [];
  for(let i = 0; i<a; i++){
    arr1[i] = b;
  }
  return console.log(arr1);
}
myArrayFill(6,"Y");



// 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//   что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(a) {
  let num = a;
  let otvet = false;
  if (num > 0 && num < 10) {
    otvet = true
  } else {
    otvet;
  }
  return console.log(otvet) ;
}
isNumberInRange(2);


// 3) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(a) {
  let numberIn = a;
  let otvet3 = false;
  if (numberIn % 2 === 0) {
    otvet3 = true;
  } else {
    otvet3
  }
  return otvet3 ;
}

isEven(5);

// 4) Дан массив с целыми числами.
// Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

let arrayNumbersIn = [1,8,35,555,84,61,51,1051,486,8888,1120,846523,84632130,-8,0]
let arrayNumbersInNew = [];
arrayNumbersIn.forEach((el,index,array)=>{
if (isEven(el)===true){
  arrayNumbersInNew.push(el);
}
})

console.log(arrayNumbersInNew)

// 5) Создайте функцию, которая получает два параметра – число и степень числа.
//   Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.
function powerMultiplication(a,b) {
  let numberIn5 = a;
  let numberInq = b;
  console.log(numberIn5 ** numberInq);
}

powerMultiplication(5,3);

// 6) Функция принимает параметр - возраст пользователя.
//   Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

function ageCheck(a) {
  let agePeople = a;
  if (agePeople > 16) {
    console.log("«добро пожаловать»")
  } else {
    console.log("вы еще молоды")
  }
}
ageCheck(17);

// 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//   В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

function ageCheckTwo(a) {
  let agePeople = a;
  if (agePeople > 16) {
    console.log("«добро пожаловать»")
  } else if( agePeople===undefined){
    console.log("Введите возраст")
  } else {
    console.log("вы еще молоды")
  }
}
ageCheckTwo();

// 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//   Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//   делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

function myUpperCase(info){
  let str8 = info ;
  let ar009 = str8.split(" ");
  ar009.forEach((el, idx,) => {
    ar009[idx] = el[0].toUpperCase() + el.slice(1);
  })
  str8 = ar009.join("" + " ");
  return console.log(str8);
}

myUpperCase("hello my world");

// 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)

function myUpperCaseTwo(info){
  let str8 = info ;
  let ar009 = str8.split("_");
  ar009.forEach((el, idx,) => {
    if(idx===0){
      ar009[idx] = el[0] + el.slice(1);
    }else {
      ar009[idx] = el[0].toUpperCase() + el.slice(1);
    }
  })
  str8 = ar009.join("");
  return console.log(str8);
}

myUpperCaseTwo("var_text_hello");



// 10) Сделайте функцию inArray,
//   которая определяет,
//    есть в массиве элемент с заданным текстом или нет.
//   Функция первым параметром должна принимать текст элемента,
//   а вторым - массив,
//   в котором делается поиск.
//   Функция должна возвращать true или false.

function inArray(a, b){

  let arrInFunction = b;
  let serchString = a;
  let otvet = false;
  arrInFunction.forEach((el,indx,)=>{
    if(el=== serchString){
      otvet=true
    }else{
      otvet
    }

  })
  return console.log(otvet) ;
}

inArray("js",["css", "js","HTML", "phiton","C++","C","bios","asembler"]);
