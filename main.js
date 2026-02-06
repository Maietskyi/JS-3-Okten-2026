// JS. ДЗ 7
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
//
// let users = [
//     new User(1, 'Misha', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 37'),
//     new User(2, 'Vika', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 38'),
//     new User(3, 'Roma', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 39'),
//     new User(4, 'Daria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 40'),
//     new User(5, 'Vasyl', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 41'),
//     new User(6, 'Maria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 42'),
//     new User(7, 'Anna', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 43'),
//     new User(8, 'Andriy', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 44'),
//     new User(9, 'Vitalik', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 45'),
//     new User(10, 'Ivan', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 46')
// ]
//
// console.log(users)
//
// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//
// console.log(users.filter(value => value.id % 2 === 0));
//
// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => b.id - a.id));
// console.log(users.sort((a, b) => a.id - b.id));
//
// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
//
// function Product(title, price) {
//     this.title = title;
//     this.price = price;
// }
//
// function Client(id, name, surname, email, phone, ...products) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = products;
// }
//
// let clients = [
//     new Client(1, 'Misha', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 37',
//         new Product('tv', 546), new Product('phone', 849)),
//     new Client(2, 'Vika', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 38',
//         new Product('email', 849), new Product('phone', 849), new Product('iphone', 849)),
//     new Client(3, 'Roma', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 39',
//         new Product('iphone', 849)),
//     new Client(4, 'Daria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 40',
//         new Product('iphone', 849), new Product('iphone', 849)),
//     new Client(5, 'Vasyl', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 41'),
//     new Client(6, 'Maria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 42',
//         new Product('keyboard', '325')),
//     new Client(7, 'Anna', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 43',
//         new Product('email', 849), new Product('phone', 849), new Product('iphone', 849), new Product('iphone', 849)),
//     new Client(8, 'Andriy', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 44',
//         new Product('tv', 546), new Product('phone', 849), new Product('iphone', 849)),
//     new Client(9, 'Vitalik', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 45',
//         new Product('tv', 546)),
//     new Client(10, 'Ivan', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 46',
//         new Product('keyboard', '325'))
// ]
//
// console.log(clients)
//
// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
//
// console.log(clients.sort((a, b) => a.order.length - b.order.length));
//
// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//
// function Car(model, producer, year, maxSpeed, engineDisplacement) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineDisplacement = engineDisplacement;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function () {
//         for (let key in this) {
//             console.log(key, this[key]);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         if (newSpeed > 0) {
//             this.maxSpeed = newSpeed + maxSpeed;
//         }
//     }
//     this.changeYear = function (newValue) {
//         if (newValue > 1900) {
//             this.year = newValue;
//         }
//     }
//     this.drivers = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('Passat', 'Volkswagen', 2011, 210, 1600)
// console.log(car1);
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(20)
// console.log(car1);
// car1.changeYear(2020)
// console.log(car1)
// car1.drivers({name: 'Misha', year: 26})
//
// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
//
// class Car {
//
//     constructor(model, producer, year, maxSpeed, engineDisplacement) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineDisplacement = engineDisplacement;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     info() {
//         for (let key in this) {
//             console.log(key, this[key]);
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         if (newSpeed > 0) {
//             this.maxSpeed += newSpeed;
//         }
//     }
//
//     changeYear(newValue) {
//         if (newValue > 1900) {
//             this.year = newValue;
//         }
//     }
//
//     drivers(driver) {
//         this.driver = driver;
//     }
// }

// let car2 = new Car('Passat', 'Volkswagen', 2011, 210, 1600)
// console.log(car2);
// car2.drive()
// car2.info()
// car2.increaseMaxSpeed(20)
// console.log(car2);
// car2.changeYear(2020)
// console.log(car2)
// car2.drivers({name: 'Misha', year: 26})
//
// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let cinderellas = [
//     new Cinderella('Anna', 18, 35),
//     new Cinderella('Vika', 19, 36),
//     new Cinderella('Maria', 20, 37),
//     new Cinderella('Sofia', 21, 38),
//     new Cinderella('Ira', 22, 39),
//     new Cinderella('Ola', 23, 38),
//     new Cinderella('Daria', 24, 39),
//     new Cinderella('Vika', 23, 38),
//     new Cinderella('Maria', 25, 39),
//     new Cinderella('Lilia', 22, 38)
// ]
// console.log(cinderellas);
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// let princeM = new Prince('Misha', 26, 36);
// console.log((princeM));
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// for (let item of cinderellas) {
//     if (item.footSize === princeM.shoeSize) {
//         console.log(item);
//         princeM.wife = item;
//     }
// }
// console.log(princeM);
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
// let finde = cinderellas.find(cinderella => cinderella.footSize === princeM.shoeSize);
// princeM.wife = finde;
// console.log(princeM);
//
// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function (callback) {
//     const yourArray = this;
//     for (const item of yourArray) {
//         callback(item);
//     }
// };
//
// [11, 22, 33].myForEach((x) => console.log(x));
// Array.prototype.myForEach = function(callback) {
//     const yourArray = this;
//     for (const item of yourArray) {
//         callback(item);
//     }
// };
// [11, 22, 33].myForEach((x) => console.log(x));


// Array.prototype.myFilter = function (predicate) {
//     const arr = [];
//     for (const item of this) {
//         if (predicate(item)) {
//             arr.push(item);
//         }
//     }
//
//     return arr;
// };
//
// Array.prototype.myFilter = function(predicate) {
//     const array = [];
//     for (const i of this) {
//         if (predicate(i)) {
//             array.push(i);
//         }
//     }
//     return array;
// };
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// const result = users.myFilter((user) => user.status);
//
// console.log(result);
