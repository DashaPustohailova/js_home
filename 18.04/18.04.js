/*
* 1. Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено
* */

let N = 1234;

function sumNum(n) {
    if(n<=0) return 0;
    return Math.floor(n%10)+sumNum(Math.floor(n/10));
}

let m = sumNum(N);
console.log(`sumNum = ${m} (N = ${N})`);





/*
* 2. Написать функцию проверки на спам. Функция принимает на вход текст и спам - слова. Определить по 5ти бальной шкале,
*  насколько часто в тексте встречается спам. Результат вернуть из функции*/
//спамом считаем слово spam в любом регистре
let string = 'Hellо, spam World. One spAm 1 1 1 1 1';
let spam = 'SPAM';
let cnt = 0, i = 0;
console.log(string);
m = spamFunc(string);
console.log(`spamFunc = ${m}`);


function spamFunc(string) {
    let newStr = string.toUpperCase();
    while(1) {
        let x = newStr.indexOf(spam, i);
        if(x === -1) break;
        cnt++;
        i = x+1;
    }
    let p = (cnt / string.split(" ").length) <= 0.2 ? 1 :(cnt / string.split(" ").length) <= 0.4?
        2 :(cnt / string.split(" ").length) <= 0.6 ?3:(cnt / string.split(" ").length) <= 0.8
            ?4:5;
    return p;
}





/*
* 3. Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
* будет выводить слово «товар» в нужно форме («12 товаров», но «22 товара» и тд)*/
/*
* 0 - товаров
* 1 - товар
* 2 - 4 - товара
* 5 - 9 - товаров*/
function aOrOv(num) {
    if((Math.floor(num%10) === 0 || Math.floor(num%10) >=5 && Math.floor(num%10) <=9 )){
        console.log(`${num} товаров`);
    }
    else if (Math.floor(num%10) === 1) console.log(`${num} товар`);
    else console.log(`${num} товарa`);
}

aOrOv(22);


let users = [
    {
        login: "qwe",
        age: 34,
        city: "Москва",
        favouriteLangs: ["php", "js"]
    },
    {
        login: "asd",
        age: 23,
        city: "Москва",
        favouriteLangs: ["python", "javascript"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "c"]
    },
    {
        login: "rty56",
        age: 58,
        city: "Тверь",
        favouriteLangs: ["java", "scala"]
    },
    {
        login: "ght",
        age: 45,
        city: "Владивосток",
        favouriteLangs: ["php", "ruby"]
    },
];


/*
* 4. Напишите функцию, которая принимает на вход 3 аргумета (usersArr, from и to), где usersArr - массив пользователей,
*  from - минимальный возраст и to - максимальный возраст (если to не задан, максимальный возраст не ограничен).
*  Функция возвращает логины пользователей из массива usersArr, возраст которых находится в диапазоне [from; to)*/
function userAge(usersArr, from,to=200){
    let mass = [];
    for(let elem of usersArr){
        if(elem.age >=from && elem.age<=to) mass.push(elem.login)
    }
    return mass;
}
console.log(userAge(users,34, 50));



/*
* 5. Напишите функцию, которая принимает на вход 2 обязательных аргумета (usersArr, favouriteLang),
*  где usersArr - массив пользователей, favouriteLang - предпочитаемый язык программирования
*  (агрумент передается строкой). * Функция возвращает логины пользователей из массива usersArr,
* у которых в списке предпочитаемых языков есть favouriteLang

*/

function lang(usersArr, favouriteLang) {
    let mass = [];
    for(let elem of usersArr){
        if(elem.favouriteLangs.includes(favouriteLang)) mass.push(elem.login);
    }
    return mass;
}
console.log(lang(users, "java"));



/*
* 6. Напишите функцию, которая принимает на вход массив и сортирует его
*  по названию городов пользователей (от А до Я).*/
function  sortCity(arr) {
    let city = [];
    let new_user = [];
    for(let elem of arr){
        city.push(elem.city);
    }
    city.sort();
    for(let i of city){
        for(let j of arr){
            if(i === j.city) {
                new_user.push(j);
                break;
            }
        }
    }
    return new_user;
}

console.log(sortCity(users));

