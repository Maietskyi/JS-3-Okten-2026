// JS. ДЗ 4
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б
//
// function area(a, b) {
//     return a * b;
// }
// console.log(area(52, 31))
//
// #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r
//
// function areaKolo(r) {
//     return 3.14*(r*r);
// }
// console.log(areaKolo(10));
//
// function areaKolo(r) {
//     return Math.PI * r * r;
// }
// console.log(areaKolo(8));
//
// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
//
// function area (h, r){
//     return 2 * Math.PI * r * (r+h)
// }
//
// console.log(area(5, 3))
//
// #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
//
// function writer(arr) {
//     for (let ar of arr) {
//     }
//     console.log(arr)
// }
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
// writer(books);
//
// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
//
// function foobar (text){
//     document.write(`<p>${text}</p>`)
// }
// foobar('Misha')
//
// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
//
// function solve(text) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// solve('Misha')
//
// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//
// function builds(text, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// builds('Misha', 5)
//
// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
//
// function writer(arr) {
//     document.write(`<ul>`)
//     for (let ar of arr) {
//         document.write(`<li>${ar}</li>`)
//     }
//     document.write(`</ul>`)
// }
// let arrM = ['Maietskyi', 108, true, 'Okten', 266, false, 'JavaScript']
// writer(arrM)
//
// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
//
// function solve(array) {
//     for (let user of array) {
//         document.write(`<p>${user.id} ${user.name} ${user.age}</p>`)
//     }
// }
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// solve(usersWithId)
//
//     #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву
//
// function min(array) {
//     let numMin = array[0];
//     for (let num of array) {
//         if (num < numMin) {
//             numMin = num;
//         }
//     }
//     console.log(numMin);
// }
//
// let arrNum = [21, 713, 672, 582, 942, 548, 19, 931, 185, 321, 32, 363, 632, 453, 258, 729, 277, 215, 690, 976];
// min(arrNum);
//
// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// function sum(arr) {
//     let sum = 0;
//     for (let i of arr) {
//         sum += i
//     }
//     console.log(sum)
// }
//
// sum([1, 2, 10])
//
// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// function swap(arr, index1, index2) {
//     ind = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = ind;
//
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));
//
// #mkGDenYnNjn.html
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
//
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (let currencyValue of currencyValues) {
//         if (exchangeCurrency === currencyValue.currency) {
//             return sumUAH / currencyValues.value
//         }
//     }
// }
//
// let value = exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD')
//
// console.log(value)

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (exchangeCurrency === currencyValues[i].currency) {
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
