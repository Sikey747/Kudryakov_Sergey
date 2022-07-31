// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

const ar01 = ['a', 'b', 'c'];
const ar2 = [1, 2, 3];
const ar33 = ar01.concat(ar2);
console.log(ar33);

// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. (через push и через splice)

const ar5 = ['a', 'b', 'c'];
ar5.push(1,2,3);
console.log(ar5);

const ar6 = ['a', 'b', 'c'];
ar6.splice(ar6.length,0,1,2,3);
console.log(ar6)

// 3) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const ar7 = [1, 2, 3, 4, 5];
ar7.splice(1,2,);
console.log(ar7);

// 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const ar8 = [1, 2, 3, 4, 5];
ar8.splice(3,0,'a', 'b', 'c');
console.log(ar8);

// 5) Дан массив const arr = [1, 2, 3, 4, 5].
// Создать новый пустой массив arr1.
// Обойти массив arr через цикл for,
// каждый элемент массива arr умножить на 10 и
// результат положить в массив arr1.
const arr = [1, 2, 3, 4, 5];
const arr9 = [];

arr.forEach((el,indx,)=>{
    arr9[indx] = el * 10;
    // arr9.push(el * 10); или так
})
console.log(arr9);

// 6) Вывести числа от 4 до 400 на экран.

for (i=4;i<=400;i++){
    console.log(i);
}
// 7) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

for (u=4; u<=13; u= u+3){
    console.log(u)
}

// 8) Вывести числа 654 653 652 до нуля.

for (y=654; y>=0; y= y-1){
    console.log(y)
}
// 9) Вывести все годы с 1983 до 2017.

for(g=1983; g<=2017; g++){
    console.log(g);
}

// 10) Вывести числа -4 -2 0 2 4 6 ...100.

for (r=-4;r<=100;r=r+2){
    console.log(r);
}

// 11) Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)
let res = 0;
for (q=0;q<=100;q++){
    res = res +q;
}
console.log(res);

// 12) Заполните массив следующим образом: в первый элемент запишите 'x',
// во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.

alert("Задача 12. Ведите длиннц масиыва")
let arr12 = new Array(+prompt());

arr12.fill("x")

console.log(arr12);



// 13) Заполните массив следующим образом: в первый элемент запишите '1',
//     во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.

alert("Задача 13. Ведите длиннц масиыва")

let arr13 = new Array(+prompt());
arr13[0] = '1';
arr13[1] = '22';
arr13[2] = '333';

console.log(arr13);

// 14*) нарисовать матрицу x должны быть по краям, 0 в центре. ( длина и высота матрицы не меньше 10 )
// ['x', 'x', 'x', 'x', 'x' 'x', 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
// ['x', 'x', 'x', 'x', 'x', 'x','x']

const mtx1 = [
    ['x', 'x', 'x', 'x', 'x','x', 'x'],
    ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x'],
    ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x'],
    ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x'],
    ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x'],
    ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x'],
    ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x'],
    ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x'],
    ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x'],
    ['x', 'x', 'x','x', 'x', 'x', 'x'],
]

console.log(mtx1);

// 15*) нарисовать матрицу (таблица умножения)
// 0: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1: (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// 2: (10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// 3: (10) [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
// 4: (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// 5: (10) [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
// 6: (10) [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
// 7: (10) [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
// 8: (10) [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
// 9: (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const mtx2 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
    [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
    [8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
]

console.log(mtx2);

// 16*)	Написать программу которая будет склонять слово
// 	“товар” в зависимости от количества товаров в корзине.
//     Например 1 - товар, 4 - товара, 6 - товаров.
alert("Задача №16")
const x = +prompt("Введите количесто товаров");

switch (x){
    case 0:
        console.log("У вас нет товаров");
        break;
    case 1:
        console.log("У вас " + x +" товар");
        break;
    case 2:
    case 3:
    case 4:
        console.log("У вас " + x +" товара");
        break;
    default:
        console.log("У вас " + x +" товаров");
        break;
}