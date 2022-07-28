// 1 - Создать переменную каждого типа данных.

const i = 55;
const t = true;
const s = "hi мир";
const n = null;
const und = undefined;
const bi = 1234567890123456789012345678901234567890n;
const si = Symbol('id');
const obj = {name: "ivan", pasword : 5555};

// 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).
var LI = 555;
LI= 40;

let BO = "hi";
BO = "bay";

const i2 = 55;

// 3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).

// 1 Числа
let i3 = 67;
// 1 способ  число в строку
i3 = i3 +"hi";
console.log(typeof i3);
// 2 способ число в строку
console.log(typeof toString(i3));
// 3 способ число в Boolean
console.log(typeof !!i3);

// 2 Boolean
const b = true;
// 1 способ Boolean в строку
console.log(typeof String(b));
// 2 способ Boolean в строку
console.log( typeof (b + "hi"));
// 3 способ Boolean в число
console.log(typeof +b)

// 3 Строки

const s2 = "55";
// 1 способ число в строку
console.log(typeof +s2);
// 2 способ число в строку
console.log(typeof parseInt(s2));
// 3 способ число в строку
const s3 = s2 - 8;
console.log(typeof s3);
// 4 способ число в строку
console.log(typeof Number(s2));
// 5 способ число в Boolean
console.log(typeof !!s2);

// 4 null
const n1 = null;
// 1 способ Null в строку
console.log(typeof String(n1));
// 2 способ Null в число
const n2 = n1 + 8;
console.log(typeof n2);
// 3 способ Null в число
console.log(typeof +n1);

// 5 Boolean
const t3 = true;
// 1 способ Boolean в строку
console.log(typeof String(t3));
// 2 способ Boolean в число
const t4 = t3 + 8; // теперь t3 равнв 1
console.log(typeof t4);
// 3 способ Boolean в число
console.log(typeof +t3);

// 6 undefined
const und1 = undefined;
// 1 способ undefined в строку
console.log(typeof toString(und1));
// 2 способ undefined в число
console.log(typeof +und1);
// 3 способ undefined в число
console.log(typeof (und1+5));

// 7 Symbol
const si1 = Symbol('hi');
// 1 способ Symbol в строку
console.log(typeof si1.toString());
// 2 способ Boolean в число
console.log(typeof !!si1);

// 8 Object
const obj1 = {name: "uou", pasword : 5555};
// 1 способ Object в boolean
console.log(typeof !!obj1);
// 2 способ Object в цифры
console.log(typeof +obj1);
// 3 способ Object в строку
console.log(typeof String(obj1));
// 4 способ Object в строку
const s10 =  JSON.stringify(obj1);
console.log(typeof s10);
// 5 способ строку Object
const obj3 = JSON.parse(s10)
console.log(typeof s10);

// 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.

const s7 = "hi мир";

const i7 = 55;
const t7 = true;
const n7 = null;
const und7 = undefined;
const bi7 = 1234567890123456789012345678901234567890n;
const si7 = Symbol('id');
const obj7 = {name: "ivan", pasword : 5555};

const res1 = s7 + i7;   console.log(res1);
const res2 = s7 + t7;   console.log(res2);
const res3 = s7 + n7;   console.log(res3);
const res4 = s7 + und7; console.log(res4);
const res5 = s7 + bi7;  console.log(res5);
// const res6 = s7 + si7;  console.log(res6);
const res7 = s7 + obj7; console.log(res7);


// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.

const s8 = "hi мир";

const i8 = 55;
const t8 = true;
const n8 = null;
const und8 = undefined;
const bi8 = 1234567890123456789012345678901234567890n;
const si8 = Symbol('id');
const obj8 = {name: "ivan", pasword : 5555};

const resu1 = s7 + i7;   console.log(resu1);
const resu2 = s7 + t7;   console.log(resu2);
const resu3 = s7 + n7;   console.log(resu3);
const resu4 = s7 + und7; console.log(resu4);
const resu5 = s7 + bi7;  console.log(resu5);
// const resu6 = s7 + si7;  console.log(resu6);
const resu7 = s7 + obj7; console.log(resu7);


// 6 - Задача (Условный оператор)
// Пользователь вводит логин и пароль.
// Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
// то выводится «Добро пожаловать». Если не совпадают –
// то «Ошибка входа».

// alert('Задача №6');
//
// const loginin = prompt('login');
// const paswordin = prompt('pasword');
//
// const login = 'kykold';
// const pasword = '1234asdQQ';
//
// if(login === loginin && pasword === paswordin){
//     alert('«Добро пожаловать»');
// }else{
//     alert('«Ошибка входа»');
// }
//
// // 7 - Задача (Условный оператор)
// // Пользователь вводит год рождения.
// // Программа показывает количество
// // лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// // если нет – «вход воспрещен».
//
// alert('Задача №7');
//
// const year_user = +prompt('В ведите год рождения');
// const year_now = 2022;
// const age = year_now - year_user;
//
// alert('Вам ' + age +' лет!' )
//
// if (age >= 16 ) {
//     alert('«Добро пожаловать»');
// }else{
//     alert('«Вход воспрещен»')
// }

// 8 - Задача (Условный оператор)
// Создайте программу, которая выводит надбавку за стаж.
// Пользователь вводит стаж работы, а программа пишет ему надбавку.

// alert('Задача №8');
//
// const year_work = +prompt('Введите ваш стаж');
//
// if(year_work===0){
//   alert('«Вы не наработали на натбавку!»');
// }else if(year_work===1){
//   alert('«Ваша натбавка: стакан пшена иди работай!»');
// }else if(year_work > 1 && year_work <=3){
//   alert('«Ваша натбавка: 2 плети в час!»');
// }else if(year_work > 3 && year_work <=5){
//   alert('«Ваша натбавка: теперь у тебя есть ветка!»');
// }else if(year_work > 5 && year_work <=10){
//   alert('«Ваша натбавка: Добби получил носок!»');;
// }else if(year_work > 10 && year_work <=25){
//   alert('«Ваша натбавка: 3 чеканых монеты !»');
// }else if(year_work > 25 && year_work <=50){
//   alert('«Ваша натбавка: Таблетки от сердца !»');
// }else if(year_work > 50 && year_work <=100){
//   alert('«Ваша натбавка: Аплодисменты !»');
// }else{
//   alert('«Ваша натбавка: Ты ещё жив?»');
// }

// 9 - Задача (Условный оператор и свитч кейс)
// Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
// 9.1 Решить на иф елсах
// 9.2 Решить на свитч кейсе
// 9.3 Решить на тернарном операторе

// alert('Задача №9');
//
// const day= +prompt('Введите число день недели');

// if(day===1){
//   alert('«Monday»');
// }else if(day===2){
//   alert('«Tuesday»');
// }else if(day===3){
//   alert('«Wednesday»');
// }else if(day===4){
//   alert('«Thursday»');
// }else if(day===5){
//   alert('«Friday»');
// }else if(day===6){
//   alert('«Saturday»');
// }else if(day===7){
//   alert('«Sunday»');
// }else{
//   alert('«Вы ввели число больше дней в неделе»');
// }



// switch (day){
//   case 1:
//     alert('«Monday»');
//     break;
//   case 2:
//     alert('«Tuesday»');
//     break;
//   case 3:
//     alert('«Wednesday»');
//     break;
//   case 4:
//     alert('«Thursday»');
//     break;
//   case 5:
//     alert('«Friday»');
//     break;
//   case 6:
//     alert('«Saturday»');
//     break;
//   case 7:
//     alert('«Sunday»');
//     break;
//   default:
//       alert('«Вы ввели число больше дней в неделе»');
//     break
// }


// day === 1 ?
//   alert( '«Monday»' )
//   : day === 2 ?
//     alert( '«Tuesday»' ):
//     day === 3 ?
//       alert( '«Wednesday»' )
//       : day === 4 ?
//         alert( '«Thursday»' )
//         : day === 5 ?
//           alert( '«Friday»' )
//           : day === 6 ?
//             alert( '«Saturday»' )
//             : day === 7 ?
//               alert( '«Sunday»' )
//               : alert('«Вы ввели число больше дней в неделе»');

// 10 - Задача (Условный оператор)
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//   1, если значение больше нуля,
//   -1, если значение меньше нуля,
//   0, если значение равно нулю.

// alert('Задача №10');
//
// const number10= +prompt('Введите число');
//
// if(number10>1){
//   alert("Число больше 1")
// }else if(number10===0){
//   alert("Число равно 0")
// }else{
//   alert("Число меньше 1")
// }

// 11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.
//
//   let message;
//
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// alert('Задача №11');
//
// const login= prompt('Введите число');
//
// let message;
//
// login === 'Сотрудник' ?
//   message = 'Привет'
//   :login === 'Директор'?
//     message = 'Здравствуйте'
//      :login === ''?
//       message = 'Нет логина'
//       :message = '';
//
// alert(message);

// 12 - Задача (Условный оператор)
// В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
// Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.

// alert('Задача №12');
//
// const room = +prompt('Введите номер квартиры');
//
// if(room >= 1 && room <= 20){
//   alert("У вас 1 подезд")
// }else if(room >=21 && room <=48 ){
//   alert("У вас 2 подезд")
// }else if(room >=49 && room <=90 ) {
//   alert("У вас 3 подезд")
// }else{
//   alert("Ты вобще с этого дома?")
// }

// 13 - Задача (Условный оператор)
// Напишите if..else, соответствующий следующему switch:
//
//   switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
//
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
//
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// alert('Задача №13');
//
// const browser = prompt('Введите название браузера');
//
// if(browser === 'Edge' ){
//   alert( "You've got the Edge!" );
// }else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
//   alert( 'Okay we support these browsers too' );
// }else{
//   alert( 'We hope that this page looks ok!' );
// }

// 14 - Задача (свитч кейс)
// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:
//
//   const number = +prompt('Введите число между 0 и 3', '');
//
//   if (number === 0) {
//     alert('Вы ввели число 0');
//   }
//
//   if (number === 1) {
//     alert('Вы ввели число 1');
//   }
//
//   if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
//   }

// alert('Задача №14');
//
// const number6 = +prompt('Введите число между 0 и 3', '');
//
// switch (number6){
//   case 0:
//     alert('Вы ввели число 0');
//     break
//   case 1:
//     alert('Вы ввели число 1');
//     break
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
//   default:
//     alert('Вы ввели число больше 3 или меньше 0');
//     break
// }

