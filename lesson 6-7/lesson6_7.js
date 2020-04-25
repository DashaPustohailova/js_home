/*заголовки ячеек: навание свойств объекта
  сами ячейки: значения свойств объекта
  Например, для массива goods из файла lesson6/js/foHw.js таблица будет следующего вида:
   TITLE     PRICE   COUNT
  Пианино    3000     25
  Гитара     1200     40
  Барабаны   2700     12
  и тд
  Вывод после нажатия на COUNT:
   TITLE     PRICE   COUNT
  Барабаны   2700     12
  Пианино    3000     25
  Гитара     1200     40
  и тд*/

let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];
/*Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
 При нажатии на заголовок ячейки должна происходить сортировка по соответствующему столбцу:*/

/*
function generateTable(arrObjects) {
    let tableArea = document.etElementById(userTable);
    let table = document.createElement('table');

    let caption = table.createCaption();
    caption.innerText = 'Моя таблица';

    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    tableArea.append(table);
}


// примеры вызова функции:
generateTable(goods); // генерация таблицы с товарам*/

function generateTable(arrObj) {
    let tableArea = document.getElementById('userTable');
    let table = document.createElement('table');
    table.setAttribute("border", 1);
    let caption = table.createCaption();
    caption.innerText = 'Моя таблица';
    let cell;
    let row = table.insertRow(0);
    /*    let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerText = 'cell1';
        cell2.innerText = 'cell2';*/
  for (let el in arrObj[0]) {
        cell = row.insertCell(-1);
        cell.innerText = el;
        cell.addEventListener("click", sort);
    }
    for(let el of arrObj){
        row=table.insertRow(-1);
        for (let el1 in el)
        {
            cell=row.insertCell(-1);
            cell.innerText=el[el1];
        }
    }
    tableArea.append(table);
}

function sort() {

    console.log("sort", this);
}
generateTable(goods);
generateTable(articles);