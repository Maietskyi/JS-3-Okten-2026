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
// створити пустий масив, наповнити його 10 об’єктами new User(….)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// };
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
// ];
// console.log(users);
//
// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
//
// console.log(users.filter(user => user.id % 2 === 0));
//
// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(users.sort((a, b) => b.id - a.id));
//
// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
//
// function Client(id, name, surname, email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// function Product(title, price) {
//     this.title = title;
//     this.price = price;
// }

// let clients = [
//     new Client(1, 'Misha', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 37',
//         [new Product('tv', 546), new Product('phone', 849)]),
//     new Client(2, 'Vika', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 38',
//         [new Product('email', 849), new Product('phone', 849), new Product('iphone', 849)]),
//     new Client(3, 'Roma', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 39',
//         [new Product('iphone', 849)]),
//     new Client(4, 'Daria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 40',
//         [new Product('iphone', 849), new Product('iphone', 849)]),
//     new Client(5, 'Vasyl', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 41',[]),
//     new Client(6, 'Maria', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 42',
//         [new Product('keyboard', '325')]),
//     new Client(7, 'Anna', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 43',
//         [new Product('email', 849), new Product('phone', 849), new Product('iphone', 849), new Product('iphone', 849)]),
//     new Client(8, 'Andriy', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 44',
//         [new Product('tv', 546), new Product('phone', 849), new Product('iphone', 849)]),
//     new Client(9, 'Vitalik', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 45',
//         [new Product('tv', 546)]),
//     new Client(10, 'Ivan', 'Maietskyi', 'mmaietskyi@gmail.com', '067 674 07 46',
//         [new Product('keyboard', '325')])
// ];
// console.log(clients);
//
// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
//
// console.log(clients.sort((a, b) => a.order.length - b.order.length));
//
// function Client(id, name, surname, email, phone, ...product) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = product;
// }
//
// function Product(title, price) {
//     this.title = title;
//     this.price = price;
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
// ];
// console.log(clients);
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
//
//
//
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
//
//
//
//
//
//
//
//
// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
//
//
//
//
//
//
//
//
//
// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter