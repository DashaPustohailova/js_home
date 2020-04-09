
/*Даны 2 слова, состоящие из четного числа букв. Получить слово состоящее из первой половины первого слова и второй половины второго слова.*/
let world1 = "aajjaa";
let world2 = 'bbbccbbb';
let j=0;
let my_world=[];
for(let i=0; i <((world1.length)/2); i++) {
    my_world[j++]=world1[i];
}
for( let i=((world2.length) /2); i < world2.length; i++) {
    my_world[j++]=world2[i];
}

console.log(my_world.join(''));


// Найдите самое длинное слово в предложении, при условии, что в предложении все слова разной длины.

let sentence='a aa aaa aaaa aaaaa aaaaaa aaaaaaa aaaaaaaa aa';
let sentence_mas=sentence.split(' ');
let longestWord = sentence_mas.reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
});
console.log(longestWord, 'Длина', longestWord.length);


//Дана строка, которая содержит буквы и числа, например, "улица Ломоносова дом 9 корпус 1 офис 1120".
// Необходимо создать массив, элементы которго будут числа строки, например для данной строки массив будет вида [9, 1, 1120]

sentence = 'улица Ломоносова дом 9 корпус 1 офис 1120';
sentence_mas=sentence.split(' ');
let mass = [];
console.log(sentence);
j=0;
for(let i=0; i<sentence_mas.length;i++)
    if (Number. isInteger(+sentence_mas[i])) mass[j++] = sentence_mas[i];

console.log(mass);

/*Содать двумерный массив из 3 вложенных массивов, в каждом вложенном массиве по 6 целых чисел
Массив заполнить вручную:
например,
    let someArr = [
          [5, 6, 12, -90, 9, 0], // 6 элементов
          [34, 67, 45, -40, 10, 98], // 6 элементов
          [-77, 88, 99, -99, 1, 3], // 6 элементов
      ];
или случайными (random) числами из отрезка [-99; 99].
Вывести массив в консоль.
Определить и вывести на экран индекс строки с наибольшим по модулю произведением элементов.
Если таких строк несколько, то вывести индекс первой встретившейся из них.*/

let someArr = [
    [5, 6, 12, -90, 9, 0], // 6 элементов
    [34, 67, 45, -40, 10, 98], // 6 элементов
    [-77, 88, 99, -99, 1, 3], // 6 элементов
];

console.log(someArr);

let total=0,cnt=0;
j=0;
let total_new;
for(let i of someArr) {
     total_new= i.reduce(function (a, b) {
        return Math.abs(a * b);
    });
    if(total_new > total) {
        total = total_new;
        cnt = j;
    }
    j++;
}

console.log(total, 'Индекс строки', cnt);


/*Создайте массив из 11 случайных целых чисел из отрезка [-1;1], выведите массив в консоль.
Определите какой элемент встречается в массиве чаще всего и выведите об этом в консоль.
Если несколько элементов встречаются одинаковое количество раз, то не выводите ничего.*/

let one_mass=[];
let mass_cnt=[0,0,0];
for(let i=0; i < 11; i++) {
    one_mass[i] = Math.floor(Math.random() *2 - 1);
}
console.log(one_mass);

for(let i=0; i <one_mass.length;i++) {
console.log(one_mass[i]);
switch (one_mass[i]){
    case -1:
        mass_cnt[0]++;
        break;
    case 0:
        mass_cnt[1]++;
        break;
    case 1:
        mass_cnt[-1]++;
        break;
}
}
console.log(mass_cnt);


if(mass_cnt[0]>mass_cnt[1] && mass_cnt[0]>mass_cnt[2]) console.log(mass_cnt[0], 'Elem -1');
else if (mass_cnt[1]>mass_cnt[2]) console.log(mass_cnt[1], 'Elem 0');
else if (mass_cnt[1]< mass_cnt[2]) console.log(mass_cnt[2], 'Elem 1');