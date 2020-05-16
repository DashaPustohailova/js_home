
/*Фермер живет за счет ресурсов, собираемых с животных. Изначально фермер создается с 5 единицами ресурсов.
Фермер должен иметь возможность:
1. собрать ресурсы с домашних животных, которые могут давать ресурсы
2. съесть домашнее животное, которое пригодно в пищу (когда на ферме не останется животных, которые дают ресурсы).
При этом расчет ресурсов следующий: 1кг животного -  1 единица ресурса
3. прогнать дикое животное, которое пришло на ферму
4. кормить домашнее животное*/
class Farmer {
    constructor() {
        this._farmerRes = 5;
    }
    set farmerRes(farmerRes){
        this._farmerRes = farmerRes;
    }

    get farmerRes(){
        return this._farmerRes;
    }
    takeResource(pets) {    //собрать ресурсы с домашних животных, которые могут давать ресурсы. Если таких животных нет, то съесть животное
        let id = pets.findIndex( pet => pet.resources > 0); //ищем индекс животного с ресурсами и на ферме
        if(id === -1) this.eatPets(pets); //если нет - едим животного
        else {
            for (let elem of pets) {
                if (elem.onFarm && elem.resources > 0) { //если животное есть на ферме и у него есть ресурсы
                     console.log(`Ресурсы фермера  ${this.farmerRes}. Ресурсы ${elem.name} ${elem.resources}.`);
                    elem.resources -= 1;
                    this.farmerRes += 1;
                     console.log(`Ресурсы фермера ${this.farmerRes}. Ресурсы ${elem.name} ${elem.resources}.`);
                }
            }
        }
    }

    eatPets(pets) {
            let id = pets.findIndex( pet => pet.name === 'rabbit' || pet.name === 'cow' || pet.name === 'hen');
            if(id>0){
                console.log(id);
                console.log(pets[id].showPets());
                pets[id].onFarm = false;
                this.farmerRes += pets[id].resources;
                console.log(`Съели ${pets[id].name}. Ресурсы фермера: ${this.farmerRes}.`);
            }
            else
                console.log(`На ферме нет животных, пригодных в пищу.`);
    }

    driveAnimal(){  //прогнать дикое животное
        return Math.floor(Math.random()*2);
    }
    feed(pets){
        for(let elem of pets){
            if((elem.startHealth >= elem.health + 1) && elem._onFarm !== 'false') elem.health +=1;

        }
    }
}



/*Домашние животные: Корова, Кот, Курица, Кролик
обладают следующими характеристиками:
    имя, вес, скорость, здоровье, количество ресурсов (у каждого свое и 0, если животное на дает ресурс)

Есть домашние животные, которые дают ресурсы:  Корова, Курица
Есть домашние животные, которые пригодны в пищу: Кролик, Корова, Курица*/
let homeAnimal = ['cow', 'hen', 'rabbit', 'cat'];
class Pets {
    constructor() {
        this._name = homeAnimal[Math.floor(Math.random()*homeAnimal.length)]; //берем рандомное  домашнее животное
        this._weight = Math.floor(Math.random()*15 + 1); //вес для всех животных задается рандомно
        this._speed = Math.floor(Math.random()*20 + 5);  //скорость для всех животных задается рандомно
        this._health = Math.floor(Math.random()*5 + 1); //здоровье от 1 до 5
        this._startHealth = this._health;
        if(this._name === 'cow' || this._name === 'hen')   //проверка, дает ресурсы или нет
            this._resources = Math.floor(Math.random()*5 + 1);
        else
            this._resources = 0;
        this._onFarm = true;
        if(!(this._name === 'cat')) this._edible = true;  //проверка, пригоден в пищу или нет
        else this._edible = false;
    }

    get startHealth(){
        return this._startHealth;
    }

    set edible(edible) {
        this._health = edible;
    }
    get edible(){
        return this._edible;
    }

    set resources(resources) {
        this._resources = resources;
    }
    get resources(){
        return this._resources;
    }

    set health(health) {
        this._health = health;
    }
    get health(){
        return this._health;
    }

    set name(name) {
        this._name = name;
    }
    get name(){
        return this._name;
    }

    set onFarm(onFarm) {
        this._onFarm = onFarm;
    }
    get onFarm(){
        return this._onFarm;
    }

    set speed(speed) {
        this._speed = speed;
    }
    get speed(){
        return this._speed;
    }

    showPets(){
        console.log(` name = ${this._name}. \n weight = ${this._weight}. \n speed = ${this._speed}. \n health = ${this._health}. \n resource = ${this._resources}. \n onFarm = ${this._onFarm}. \n edible = ${this._edible}.`)
    }

}



/*Дикие животные:
Волк, Медведь, Лисица.
обладают следующими характеристиками:
имя, вес, скорость, сила
Дикое животное может съесть (либо ранить) домашнее животное, если оно не убежит (необходимо сравнивать скорость зверей).
Если домашнее животное было съедено, то оно не остается на ферме
(из массива удалять не обязательно, можно использовать какой нибудь флаг, onFarm:true/false)!
Если фермер прогнал дикое животное с фермы 3 раза, то в 4й раз оно не может прийти на ферму.*/
class WildAnimals {
    constructor(name) {
        this._nameAimals = name;
        this._weightAimals = Math.floor(Math.random()*15 + 1); //вес для всех животных задается рандомно
        this._speedAimals = Math.floor(Math.random()*20 + 5);  //скорость для всех животных задается рандомно
        this._powerAimals = Math.floor(Math.random()*5 + 1); //сила от 1 до 5
        this._mayCome = 3;  //фермер может прогнать три раза
    }
    set nameAimals (nameAimals){
        this._nameAimals = nameAimals;
    }
    get nameAimals (){
        return this._nameAimals;
    }
    set mayCome (mayCome){
        this._mayCome = mayCome;
    }
    get mayCome (){
        return this._mayCome;
    }
    set speedAimals (speedAimals){
        this._speedAimals = speedAimals;
    }
    get speedAimals (){
        return this._speedAimals;
    }

    set weightAimals (weightAimals){
        this._weightAimals = weightAimals;
    }
    get weightAimals (){
        return this._weightAimals;
    }
    set powerAimals (powerAimals){
        this._powerAimals = powerAimals;
    }
    get powerAimals (){
        return this._powerAimals;
    }
    harm (home, flag) {  //наподение на домашнее животное
        if(!flag)
        {
            console.log(`Фермер прогнал ${this.nameAimals}`);
            this.mayCome -= 1;
            this.showAnimals();
        }
        else {
            if(this.speedAimals > home.speed) {
                let kills = Math.floor(Math.random()*2); //рандомно выбираем, ранено животное(0) или убито(1)
                // console.log(`kill = ${kills}`);
                if (kills) {
                    home.onFarm = false;
                    console.log(`${this.nameAimals} убил(-а) ${home.name}.`);
                }
                else {
                    home.health -= 1;
                    console.log(`${this.nameAimals} ранил(-а) ${home.name}.`);
                    if(home.health <= 0) home.onFarm = false;   //если здоровье <= 0 домашнее животное умирает
                }
            }
            else {
                console.log(`${this.nameAimals} не догнал(-а) ${home.name}.`);
            }
        }
    }

    showAnimals (){
        console.log(` name = ${this.nameAimals}. \n weight = ${this.weightAimals}. \n speed = ${this.speedAimals}. \n power = ${this.powerAimals}. \n mayCome = ${this.mayCome}.`);
    }
}


class Farm {
    constructor(){
        this._farmer = new Farmer();
        this._pets = [];
        this._wildAnimals = []
    }
    addPets(){
        let len = Math.floor(Math.random()*10 + 1);
        for(let i = 0; i < len; ++i){
            this._pets.push(new Pets());
        }
        for(let elem of this._pets){
            elem.showPets();
        }
    }

    addWild(){
        this._wildAnimals.push(new WildAnimals('лисица'));
        this._wildAnimals.push(new WildAnimals('волк'));
        this._wildAnimals.push(new WildAnimals('медведь'));
        for(let elem of this._wildAnimals){
            elem.showAnimals();
        }
    }




    /*День на ферме (метод класса Farm passDay):
        1. Фермер тратит 2 единицы ресурсов (если ресурсов не осталось, игра заканчивается).
        2. Приходит дикое животное (выбирается рандомно из массива с дикими животными), пытается поймать (съесть, либо ранить)
        домашнее животное (выбирается рандомно). Если домашнее животное убежало, дикое уходит ни с чем.
        3. Иногда (рандомно) фермер может прогнать дикое животное.
        4. Фермер кормит всех животных (животные восполняют здоровье)
        5. Фермер собирает ресурсы с животных, с которых можно их собирать. Если таких не осталось, съедает животное,
        пригодное в пищу (если такие остались).
    */
    passDay(){
        let rand = 0;
        do {
            rand = Math.floor(Math.random()*3);  //рандомно выбираем дикого зверя
        } while(this._wildAnimals[rand].mayCome <= 0);

        let rand2 = 0;
        do {
            rand2 = Math.floor(Math.random()*this._pets.length);  //рандомно выбираем, на кого нападет
        } while(this._pets[rand2].onFarm === 'false');

        this._farmer.takeResource(this._pets);  //собираем ресурсы/едим животное
        this._wildAnimals[rand].showAnimals();    //какой хищник нападает
        this._wildAnimals[rand].harm(this._pets[rand2], this._farmer.driveAnimal());  //нападение
        this._farmer.feed(this._pets);
        this._farmer.farmerRes -= 2;  //уменьшаем ресурсы фермеру
        if(this._farmer.farmerRes < 0) this._farmer.farmerRes = 0;
        console.log(`Ресурс фермера к концу дня = ${this._farmer.farmerRes}`);
    }
}


let farm = new Farm();   //создали ферму
farm.addPets();         //добавили домашних животный
farm.addWild();         //добавили диких животных

while(farm._farmer._farmerRes > 0) {
    console.log('Новый день');
    farm.passDay();
}

console.log('Игра закончена!');
