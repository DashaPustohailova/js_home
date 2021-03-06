
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
        let div = document.createElement('div');
        let buttonMinus = document.createElement('input')
        buttonMinus.setAttribute('type', 'button');
        buttonMinus.setAttribute('value', '-');
        buttonMinus.addEventListener('click', dec);
        let cnt = document.createElement('input');
        cnt.setAttribute('type', 'number');
        cnt.setAttribute('value', '0');
        cnt.setAttribute('readonly', 'true');
        let buttonPlus = document.createElement('input');
        buttonPlus.setAttribute('type', 'button');
        buttonPlus.setAttribute('value', '+');
        buttonPlus.addEventListener('click', inc);
        div.append(buttonMinus,cnt,buttonPlus);
        booksArea.append(title,div);
    }
}
printBooks(books);
/*
* function generate (books){
*   for(let item of books) {
*       //создание элементов для title и author
*   let btnContainer = documen/createElement('div');
*   btnContainer.innerHTML = <input type='button' value='-'>
                           <input type='number' value='0' min='0' max='${item.count}>
                           <input type='button' value='+'>
     btnContainer.addEventListener('click', changeCount.bind(btnContainer, item));
     btnContainer.querySelector('input[type='number']').addEventListener('input', changeCount.bind(btnContainer, item));
*   }
*
*
* function changeCount(book, event) {
*   let clickElem = event.target.value;
*   let num = this.querySelector('input[type='number']')
* }
* }*/

function dec(){
    if(!(parseInt( this.nextElementSibling.getAttribute('value')) === 0)){
    this.nextElementSibling.setAttribute('value', `${(parseInt( this.nextElementSibling.getAttribute('value'))-1)}`);}
    return 0;
}

function inc() {
        this.previousElementSibling.setAttribute('value', `${(parseInt(this.previousElementSibling.getAttribute('value')) + 1)}`);
}



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
