// JS. ДЗ 5
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git

//
//     Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій !!!
//

// #I2XsG6f

// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
// let area = (a, b) => a * b
// console.log(area(5, 6))

// #ETGAxbEn8l

// – створити функцію, яка обчислює та повертає площу кола з радіусом r
// let areaKolo = (r) => r * 3.14
// console.log(areaKolo(4))

// #Mbiz5K4yFe7

// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// let areaKub = (h, r) => h * r * r * 3.14
// console.log(areaKub(8, 5))

// #SIdMd0hQ

// – створити функцію, яка приймає масив та виводить кожен його елемент

// let printer = (array) => {
//     for (let arr of array) {
//         console.log(arr)
//         document.write(`<p>${arr.title}</p>`)
//     }
// }
//
// let books = [
//     {
//         title: "Тіні забутих предків",
//         pages: 160,
//         authors: ["Михайло Коцюбинський"],
//         genres: ["драма", "історичний роман"]
//     },
//     {
//         title: "Гаррі Поттер і філософський камінь",
//         pages: 320,
//         authors: ["Джоан Роулінг"],
//         genres: ["фентезі", "пригоди"]
//     },
//     {
//         title: "Майстер і Маргарита",
//         pages: 400,
//         authors: ["Михайло Булгаков", "Райс"],
//         genres: ["містика", "фантастика", "сатира"]
//     },
//     {
//         title: "Сто років самотності",
//         pages: 450,
//         authors: ["Габрієль Гарсія Маркес"],
//         genres: ["магічний реалізм", "роман",]
//     },
//     {
//         title: "Кобзар",
//         pages: 250,
//         authors: ["Тарас Шевченко", "Українка", "Франко"],
//         genres: ["поезія", "класика"]
//     },
//     {
//         title: "1984",
//         pages: 328,
//         authors: ["Джордж Орвелл"],
//         genres: ["антиутопія", "політична фантастика"]
//     },
//     {
//         title: "Портрет Доріана Грея",
//         pages: 310,
//         authors: ["Оскар Вайльд"],
//         genres: ["роман", "філософська проза"]
//     },
//     {
//         title: "Злочин і кара",
//         pages: 430,
//         authors: ["Федір Достоєвський"],
//         genres: ["роман", "драма", "психологія", "автобіографія"]
//     },
//     {
//         title: "Пригоди Тома Сойєра",
//         pages: 290,
//         authors: ["Марк Твен"],
//         genres: ["пригоди", "гумор", "дитяча література"]
//     },
//     {
//         title: "Лісова пісня",
//         pages: 180,
//         authors: ["Леся Українка"],
//         genres: ["драма-феєрія", "поезія", "українська класика"]
//     }
// ];
//
// printer(books)

// #59g0IsA

// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
// let writer = (text) => document.write(`<p>${text}</p>`)
//
// writer('cтворити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент')
// writer('створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий')

// #hOL6126

// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
// let writer = (text) => {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//         </ul>`)
// }
//
// writer('Misha');
// writer('Okten');

// #0Kxco1edSN

// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// let writer = (text, index) => {
//     document.write(`<ul>`)
//     for (i = 0; i < index; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// writer('Misha', 3);
// writer('Okten', 14);

// #gEFoxMMO

// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

// let writer = (array) => {
//     document.write(`<ul>`)
//     for (i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// writer(['Misha', 3, true, 56]);

// let writer = (array) => {
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// writer(['Misha', 3, true, 56]);

// #bovDJDTIjt

// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

// let solve = (obj) => {
//     for (let ob of obj) {
//         document.write(`<div>${ob.id}, ${ob.name}, ${ob.age}</div>`)
//     }
// }
//
// let users = [
//     {
//         id: 1,
//         name: 'Misha',
//         age: 34
//     },
//     {
//         id: 2,
//         name: 'Vika',
//         age: 25
//     },
//     {
//         id: 3,
//         name: 'Roman',
//         age: 19
//     },
//     {
//         id: 4,
//         name: 'Maria',
//         age: 42
//     }
// ]
//
// solve(users)

// solve([
//     {
//         id: 1,
//         name: 'Misha',
//         age: 64
//     },
//     {
//         id: 2,
//         name: 'Misha',
//         age: 64
//     },
//     {
//         id: 3,
//         name: 'Misha',
//         age: 64
//     },
//     {
//         id: 4,
//         name: 'Misha',
//         age: 64
//     }
// ]);

// #pghbnSB

// – створити функцію яка повертає найменьше число з масиву

// let minNumber = (number) => {
//     let min = number[0];
//     for (let i = 1; i <= number.length; i++) {
//         if (i < min) {
//             min = number[i];
//         }
//     }
//     return min;
// }
//
// console.log(minNumber([54, 11, 68, 102, -10]));

// #EKRNVPM

// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// let sum = (arr) => {
//     let summa = 0;
//     for (let i = 0; i < arr.length; i++) {
//         summa += arr[i];
//     }
//     return summa;
// }
//
// console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf

// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     let zam = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = zam;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));

// #mkGDenYnNjn.html

//  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
// debugger

// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (let currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency) {
//             return sumUAH / currencyValue.value
//         }
//     }
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'))
// debugger
// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             return sumUAH / currencyValues[i].value
//         }
//     }
// }
//
// let value = exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD')
// let value2 = exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR')
//
// console.log(value)
// console.log(value2)