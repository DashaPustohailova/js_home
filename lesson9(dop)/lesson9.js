
// задача на вывод книг
let books = [
    {author: 'Пушкин', title: 'Пир во время чумы', count: 2},
    {author: 'Толстой', title: 'Война и мир', count: 0},
    {author: 'Лермонтов', title: 'Тамань', count: 3},
    {author: 'Гончаров', title: 'Обломов', count: 10}
];

// вывести информацию о товаре
// Название
// Автор
// - 10 +
// если количество 0 -> [- 0 +] нельзя нажать на + и -
// при нажатии на + количество увеличивается (но не больше количества),
// при нажатии на - уменьшается (но не меньше 0)
// Дополнительно: можно ввести количество с клавиатуры

function printBooks(books){
    let booksArea = document.getElementById('books');
    for(let elem of books) {
        let title = document.createElement('p');
        title.innerText = `${elem.title} | ${elem.author} `;
        let buttonMinus = document.createElement('input')
        buttonMinus.setAttribute('type', 'button');
        buttonMinus.setAttribute('value', '-');
        let cnt = document.createElement('input')
        cnt.setAttribute('type', 'number');
        cnt.setAttribute('value', '0');
        cnt.setAttribute('readonly', 'true');
        let buttonPlus = document.createElement('input');
        buttonPlus.setAttribute('type', 'button');
        buttonPlus.setAttribute('value', '+');
        booksArea.append(title,buttonMinus,cnt,buttonPlus);
    }
}
printBooks(books);







// задание на вывод данных
let jsonFromServer = `[{"name":"Люся","age":"1 год","color":"трехцветная","additional_info":{"vaccinations":true,"passport":true}},{"name":"Том","age":"3 месяца","color":"белый","additional_info":{"vaccinations":false,"passport":false}},{"name":"Макс","age":2,"color":"серый","additional_info":{"vaccinations":false,"passport":true}},{"name":"Василий","age":3,"color":"черный","additional_info":{"vaccinations":true,"passport":true}}]`;
let objFromJson = JSON.parse(jsonFromServer); // вывод информации по массиву объектов
console.log(objFromJson);
// вывести информацию по каждой кошке
// Имя кошки | возраст
// картинка       Дополнительная информация:
//                Цвет:  цвет кошки
//                Документы: да / нет
//                Прививик: да / нет

function printInfoCat(objFromJson){
    let catArea = document.getElementById('cats');
    for(let elem of objFromJson){
        console.log(elem);
        let title = document.createElement('p');
        title.innerText = `${elem.name} | ${elem.age}`;
        console.log(title);
        let imgAndInfo = document.createElement('div');
        let img = document.createElement('img');
        let dopInfo = document.createElement('div');
        let color = document.createElement('p');
        color.innerText = `Цвет: ${elem.color}`;
        let documents = document.createElement('p');
        let vaccination = document.createElement('p');
        vaccination.innerText = elem.additional_info.vaccinations?' Прививки: Да' : ' Прививки: Нет';
        documents.innerText = elem.additional_info.passport? ' Паспорт: Да' : ' Паспорт: Нет';
        dopInfo.append(color, documents, vaccination);
        img.setAttribute('src', 'https://picsum.photos/200');
        imgAndInfo.append(img, dopInfo);
        imgAndInfo.classList.add('row');
        title.classList.add('title');
        dopInfo.classList.add('text', 'flex-6');
        imgAndInfo.classList.add('container');
        catArea.append(title, imgAndInfo);

    }
}
printInfoCat(objFromJson);
