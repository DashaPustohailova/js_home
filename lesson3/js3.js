
//ЗАДАЧКА НА МНОГОМЕРНЫЙ МАССИВ
/*Создать двумерный массив из 3 строк по 5 столбцов в каждом
* Заполнить случайными (random) числами из отрезка [-99;99]
* Вывести массив в консоль
* Найти значение максимального элемента массива (вывести его индекс и значение)*/
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


/*Найти все вхождения подстроки в строку. Строку и подстроку вводит пользователь (через prompt).
Не забывайте про метод trim и тд**/

let user_string = prompt("Введитe строку");
let user_string2 = prompt("Введите введите подстроку");
user_string=user_string.trim();
user_string2=user_string2.trim();
user_string.includes(user_string2) ? console.log('Yes') : console.log('No');


/!* Преобразуйте первую букву строки в верхний регистр. Строку вводит пользователь *!/
user_string = prompt("Введитe строку");
user_string=user_string.trim();
console.log(user_string.charAt(0).toUpperCase() + user_string.slice(1));


/* Дан массив ['dog', 'cat', 'rabbit', 'mouse'].
 Удалить из массива элемент со значением 'cat' */
let arr = ['dog', 'cat', 'rabbit', 'mouse'];
console.log(arr);
let index = arr.indexOf('cat');
arr.splice(index, 1);
console.log(arr);