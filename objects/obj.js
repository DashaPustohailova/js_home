let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];


/*
Задача 1
Даны переменные from и to, значения переменных вводит пользователь через prompt.
Пользователь должен вводить числа.
Но если пользователь вводит не числа, его нужно попросить повторить ввод, пользователь может ввести exit для выхода.
На основе объекта goods создать новый объект с товарами,
цены которых лежат в диапазоне от значения from до значения to*/


let form=40;
let to=10;
let cnt=0;
let mass = {};

do {
    console.log(form,to);
    if(cnt !== 0) alert('Пожалуйста, введите числа' +
        'Exit - для выхода');
    form = prompt('Введите натуральное число больше').trim();
    let f=form.toUpperCase();
    if(f === 'EXIT') break;
    form = +form;
  to = prompt('Введите натуральное число больше').trim();
    f=to.toUpperCase();
    if(to === 'EXIT') break;
    to = +to;
    cnt++;

}while(!(Number.isInteger(form) && Number.isInteger(to) ));

let j = 0;
for (let i in goods) {
    if (goods[i].count <= Math.max(form,to) &&  goods[i].count>=Math.min(form,to)) {
        mass[j++] = goods[i];
    }
}

console.log(mass);


/*
Задача 2
Даны 2 переменные title и countToCart (значения переменных вводит пользователь через prompt).
Необходимо найти товар с указанным названием (title):
если количество позволяет, то уменьшить количество товара в объекте goods на countToCart,
если не позволяет, то вывести информацию об этом в консоль
 */

let title = prompt('Название').trim();
let countToCart = prompt ('Количество').trim();
for (let i in goods) {
    let t = goods[i].title.toUpperCase();
    if (t === title.toUpperCase()) {
        console.log(goods[i]);
        if(goods[i].count >= countToCart) {
            goods[i].count -= countToCart;

            console.log(goods[i]);
        }
        else
            console.log("Нельзя уменьшить количество страниц");
    }
}


/*
Задача 3
Дана переменная author (значение переменной вводит пользователь через prompt).
На основе массива books создать новый массив, в который войдут все книги указанного автора,
если такого автора нет, вывести информацию в консоль
*/
let author = prompt('Автор').trim();
let arr = [];
j=0;
for ( let i in books) {
    let a = books[i].author.toUpperCase();
    if(author.toUpperCase() === a){
        arr[j++]=books[i];
    }
}
console.log(arr);
if(!j)console.log('Книг данного автора нет');
