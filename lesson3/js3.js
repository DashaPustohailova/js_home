/*

//ЗАДАЧКА НА МНОГОМЕРНЫЙ МАССИВ
/!*Создать двумерный массив из 3 строк по 5 столбцов в каждом
* Заполнить случайными (random) числами из отрезка [-99;99]
* Вывести массив в консоль
* Найти значение максимального элемента массива (вывести его индекс и значение)*!/
let max=0;
let my_mass = [3]
my_mass[0]= [];
my_mass[1]= [];
my_mass[2]= [];
for(let i=0; i <  my_mass.length; i++) {
    for(let j=0; j < 5; j++) {
        my_mass[i][j]=Math.floor(Math.random()*200-99);
    }
}

for(let i=0; i <  my_mass.length; i++) {
    for(let j=0; j < my_mass.length; j++) {
        if(my_mass[i][j] > max) max = my_mass[i][j];
    }
}


console.log(my_mass);
console.log(max);
*/


/*Найти все вхождения подстроки в строку. Строку и подстроку вводит пользователь (через prompt).
Не забывайте про метод trim и тд**/

/*Предпологаю, что регистр учитывается
* иначе - добавить приведение к верхнему регистру обоих строк с помощью  toUpperCase(), либо привести все к нижнему регистру;*/
let user_string = prompt("Введитe строку");
let user_string2 = prompt("Введите введите подстроку");
let i = 0;
let x;
let cnt=0;
console.log(user_string);
console.log(user_string2);


while (true) {
    x = user_string.indexOf(user_string2,i);
    if(x === -1) break;
    console.log('Вхождение, начиная с ', x, 'индекса');
    cnt++;
    i = x+1;
}
console.log('Всего вхождений ',cnt)
/*
do {
    x = user_string.indexOf(user_string2,i);
    if (x !== -1) cnt++;
    i = x;
} while( x !== -1);
console.log(cnt);
*/

/*

/!* Преобразуйте первую букву строки в верхний регистр. Строку вводит пользователь *!/
user_string = prompt("Введитe строку");
user_string=user_string.trim();
console.log(user_string.charAt(0).toUpperCase() + user_string.slice(1));


/!* Дан массив ['dog', 'cat', 'rabbit', 'mouse'].
 Удалить из массива элемент со значением 'cat' *!/
let arr = ['dog', 'cat', 'rabbit', 'mouse'];
console.log(arr);
let index = arr.indexOf('cat');
arr.splice(index, 1);
console.log(arr);*/
