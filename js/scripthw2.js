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

let arr12 = [];
arr12.length=(+prompt("Задача 12. Ведите длиннц масиыва"));
let arr08=[];
let x = "x";

for (let i = 0; i<=arr12.length; i++){
    arr08[i] = x;
    x= x+ 'x';
}
console.log(arr08);



// 13) Заполните массив следующим образом: в первый элемент запишите '1',
//     во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.

let arr14 = [];
let count = (+prompt())
let str;
for (let i=1; i<=count; i++) {
    str = '';
    for (let j=1; j<=i; j++) {
        str += i;
    }
    arr14.push(str);
}
console.log(arr14);

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

let a1 =[]; a1.length=10; a1.fill('x');
let a2 =[]; a2.length=10; a2.fill(0); a2.splice(0,1,'x'); a2.splice(a2.length-1,1,'x');
let a3 =[]; a3.length=10; a3.fill(0); a3.splice(0,1,'x'); a3.splice(a3.length-1,1,'x');
let a4 =[]; a4.length=10; a4.fill(0); a4.splice(0,1,'x'); a4.splice(a4.length-1,1,'x');
let a5 =[]; a5.length=10; a5.fill(0); a5.splice(0,1,'x'); a5.splice(a5.length-1,1,'x');
let a6 =[]; a6.length=10; a6.fill(0); a6.splice(0,1,'x'); a6.splice(a6.length-1,1,'x');
let a7 =[]; a7.length=10; a7.fill(0); a7.splice(0,1,'x'); a7.splice(a7.length-1,1,'x');
let a8 =[]; a8.length=10; a8.fill(0); a8.splice(0,1,'x'); a8.splice(a8.length-1,1,'x');
let a9 =[]; a9.length=10; a9.fill(0); a9.splice(0,1,'x'); a9.splice(a9.length-1,1,'x');
let a10 =[]; a10.length=10; a10.fill('x');
let mtx1 =[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]

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

let b1 =[]; b1.length=11;for(let i=1; i<11; i++) {let n1=1;b1[i]=(i*n1);}b1.splice(0,1);
let b2 =[]; b2.length=11;for(let i=1; i<11; i++) {b2[i]=(i*2);}b2.splice(0,1);
let b3 =[]; b3.length=11;for(let i=1; i<11; i++) {b3[i]=(i*3);}b3.splice(0,1);
let b4 =[]; b4.length=11;for(let i=1; i<11; i++) {b4[i]=(i*4);}b4.splice(0,1);
let b5 =[]; b5.length=11;for(let i=1; i<11; i++) {b5[i]=(i*5);}b5.splice(0,1);
let b6 =[]; b6.length=11;for(let i=1; i<11; i++) {b6[i]=(i*6);}b6.splice(0,1);
let b7 =[]; b7.length=11;for(let i=1; i<11; i++) {b7[i]=(i*7);}b7.splice(0,1);
let b8 =[]; b8.length=11;for(let i=1; i<11; i++) {b8[i]=(i*8);}b8.splice(0,1);
let b9 =[]; b9.length=11;for(let i=1; i<11; i++) {b9[i]=(i*9);}b9.splice(0,1);
let b10 =[]; b10.length=11;for(let i=1; i<11; i++) {b10[i]=(i*10);}b10.splice(0,1);

let mtx2 =[b1,b2,b3,b4,b5,b6,b7,b8,b9,b10]

console.log(mtx2);

// 16*)	Написать программу которая будет склонять слово
// 	“товар” в зависимости от количества товаров в корзине.
//     Например 1 - товар, 4 - товара, 6 - товаров.

alert("Задача №16")
let tovarNumber = (+prompt("Введите количесто товаров"));
let tovar = tovarNumber.toString().split('')
    let lastnumber= +tovar.pop();
if(lastnumber===0){
    console.log("У вас " + tovarNumber + " товаров");
}else if(lastnumber===1){
    console.log("У вас " + tovarNumber +" товар");
}else if((lastnumber>=2)&&(lastnumber<=4)){
    console.log("У вас " + tovarNumber +" товара");
}else if((lastnumber>=5)&&(lastnumber<=9)){
    console.log("У вас " + tovarNumber +" товаров");
}else {
    console.log("Вы ввели странное число");
}
