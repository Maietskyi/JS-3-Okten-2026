// JS. Додаткові ДЗ по масивах та циклах
// #WpkK0ZH1
//
// –створити масив з:
//
//     – з 5 числових значень
// let arrN = [5, 54, 78, 84, 214]
// //
// // – з 5 стічкових значень
// let arrS = ['Okten', 'school', 'Maietskyi', 'Java Script', 'Full stack']
// //
// // – з 5 значень стрічкового, числового та булевого типу
// let arrM = ['Maietskyi', 108, true, 'Okten', 266, false, 'JavaScript']
// //
// // – та вивести його в консоль
// console.log(arrN, arrS, arrM)
//
// #4aDbSgh
//
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
//
// let arr = []
// arr[0] = 1;
// arr[2] = 3;
// arr[4] = 5;
// arr[3] = 4;
// arr[1] = 2;
// console.log(arr)
//
// #qLQLJSeN7i
//
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// 1. перебрати його циклом while
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }
//
//     2. перебрати його циклом for
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//
// for (let i of arr) {
//     console.log(i);
// }
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// // debugger
// while (i < arr.length) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//     }
//     i++
// }
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }
//
// for (let i of arr) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i++
// }
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) console.log(arr[i]);
// }
//
// 7. замінити кожне число, кратне 3, на слово “okten”
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'Okten'
//     }
// }
// console.log(arr)
//
// let i = 0;
// while (i < arr.length) {
//     if (arr[i] % 3 === 0) arr[i] = 'Okten'
//     i++
// }
// console.log(arr)
//
// 8. вивести масив у зворотньому порядку.
// for (let i= arr.length; i > 0; i--) {
//     console.log(arr[i]);
// }
//
// let i = arr.length;
// while (i > 0) {
//     console.log(arr[i])
//     i--
// }
//
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
//
// 1. перебрати його циклом while
// let i = arr.length;
// while (i > 0) {
//     console.log(arr[i]);
//     i--
// }
//
//     2. перебрати його циклом for
// for (let i = arr.length; i > 0; i--){
//     console.log(arr[i]);
// }
//
// for (let i of arr) {
//     console.log(i);
// }
//
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = arr.length;
// // debugger
// while (i > 0) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//     }
//     i--
// }
//
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = arr.length; i > 0; i--) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }
//
// for (let i of arr) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
//
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = arr.length;
// debugger
// while (i > 0) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//     i--
// }
//
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = arr.length; i > 0; i--) {
//     if (arr[i] % 2 === 0) console.log(arr[i]);
// }
//
// 7. замінити кожне число, кратне 3, на слово “okten”
// for (let i = arr.length-1; i > 0; i--) {
//     if (arr[i] % 3 === 0) {
//         arr[i] = 'Okten'
//     }
//     console.log(arr[i])
// }
// console.log(arr)
// //
// let i = arr.length - 1;
// while (i > 0) {
//     if (arr[i] % 3 === 0) arr[i] = 'Okten'
//     console.log(arr[i])
//     i--
// }
//
// #yHAwJOyiC
//
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [52, 54, 36, 895, 72, 145, 69, 321, 754, 625]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }
// for (let i of arr){
//     console.log(i);
// }
//
//     #GamKju89ob
//
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
// let arrS = ['Misha', 'Okten', 'Maietskyi', 'school', 'Passat', 'Business', 'Many', 'Lviv', 'Ukraine', 'Milions']
//
// for (let i = 0; i < arrS.length; i++) {
//     console.log(arrS[i])
// }
//
// let i = 0;
// while (i < arrS.length) {
//     console.log(arrS[i]);
//     i++
// }
// for (let i of arrS){
//     console.log(i)
// }
//
//     #Bm76xmg
//
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arrM = [654, true, 'Misha', false, 456, 6892, 'Okten', 'Maietskyi', 23.2, 'Mama']
// for (let i of arrM) {
//     console.log(i)
// }
// for (let i = 0; i < arrM.length; i++ ){
//     console.log(arrM[i])
// }
// let i = 0;
// while (i<arrM.length){
//     console.log(arrM[i])
//     i++
// }
//
//     #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrM = [654, true, 'Misha', false, 456, 6892, 'Okten', 'Maietskyi', 23.2, 'Mama']
// for (let i of arrM) {
//     if(typeof(i) === "boolean"){
//         console.log(i);
//     }
// }
// for (let i = 0; i < arrM.length; i++) {
//     if (typeof arrM[i] === 'boolean') {
//         console.log(arrM[i])
//     }
// }
// let i = 0;
// while (i < arrM.length) {
//     if (typeof arrM[i] === 'boolean') {
//         console.log(arrM[i]);
//     }
//     i++
// }
//
// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrM = [654, true, 'Misha', false, 456, 6892, 'Okten', 'Maietskyi', 23.2, 'Mama']
// for (let i = 0; i < arrM.length; i++) {
//     if (typeof arrM[i] === 'number') {
//         console.log(arrM[i])
//     }
// }
// for (let i of arrM) {
//     if (typeof (i) === 'number') {
//         console.log(i)
//     }
// }
// let i = 0;
// while (i < arrM.length) {
//     if (typeof arrM[i] === 'number') {
//         console.log(arrM[i]);
//     }
//     i++
// }
//
// #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arrM = [654, true, 'Misha', false, 456, 6892, 'Okten', 'Maietskyi', 23.2, 'Mama']
// for (let i = 0; i < arrM.length; i++) {
//     if (typeof arrM[i] === 'string') {
//         console.log(arrM[i])
//     }
// }
// for (let i of arrM) {
//     if (typeof i === 'string'){
//         console.log(i)
//     }
// }
// let i = 0;
// while (i < arrM.length) {
//     if (typeof arrM[i] === 'string') {
//         console.log(arrM[i]);
//     }
//     i++
// }
//
// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 654
// arr[2] = true
// arr[4] = 'Misha'
// arr[6] = false
// arr[8] = 456
// arr[9] = 6892
// arr[7] = 'Okten'
// arr[5] = 'Maietskyi'
// arr[3] = 23.2
// arr[1] = 'Mama'
// console.log(arr)
//
//     #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 10; i++) {
//     console.log(`Крок № ${i+1}`)
//     document.write(`<div>Крок № ${i+1}</div>`)
// }
// let i = 0;
// while (i < 10) {
//     console.log(`Крок № ${i+1}`);
//     document.write(`<div>Крок № ${i+1}</div>`)
//     i++
// }
//
// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`Крок № ${i+1}`)
//     document.write(`<div>Крок № ${i+1}</div>`)
// }
// let i = 0;
// while (i < 100) {
//     console.log(`Крок № ${i+1}`)
//     document.write(`<div>Крок № ${++i}</div>`)
// }
//
// #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`Крок № ${i}`)
//     document.write(`<div>Крок № ${i}</div>`)
// }
// let i = 0;
// while (i < 100) {
//     console.log(i);
//     document.write(`<p>Крок № ${i}</p>`)
//     i+=2
// }
//
// #zananT5FR1
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i%2===0){
//         console.log(i);
//         document.write(`<p>Крок № ${i}</p>`);
//     }
// }
// let i = 0;
// while (i < 100) {
//     if (i % 2 === 0) {
//         console.log(`Крок № ${i}`)
//         document.write(`<p>Крок № ${i}</p>`)
//     }
//     i++
// }
//
// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//         document.write(`<p>Крок № ${i}</p>`)
//     }
// }
// let i = 0;
// while (i < 100){
//     if(i % 2 !== 0) {
//         console.log(i);
//         document.write(`<p>Крок № ${i}</p>`)
//     }
//     i++
// }
//
// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
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
// – знайти найбільшу книжку.
//
// let pageBig = books[0];
// for (let i = 0; i < books.length; i++) {
//     let book = books[i];
//     if (pageBig.pages < book.pages) {
//         pageBig = book;
//     }
// }
// console.log(pageBig);
// document.write(`<p>${pageBig.title}</p>`);
//
// – знайти книжку/ки з найбільшою кількістю жанрів
// let book = books[0];
// for (let i = 0; i < books.length; i++) {
//     if (book.genres.length < books[i].genres.length) {
//         book = books[i];
//     }
// }
// console.log(book)
// document.write(`<p>${book.title}</p>`);
//
// – знайти книжку/ки з найдовшою назвою
// let book = books[0];
// for (let i = 0; i < books.length; i++) {
//     if (book.title.length < books[i].title.length) {
//         book = books[i];
//     }
// }
// console.log(book)
// document.write(`<p>${book.title}</p>`)
//
// – знайти книжку/ки, які писали 2 автори
// let book = books[0];
// for (let i = 0; i < books.length; i++) {
//     if (book.authors.length < books[i].authors.length) {
//         book = books[i];
//     }
// }
// console.log(book)
// document.write(`<p>${book.title} - ${book.authors}</p>`)
//
// – знайти книжку/ки, які писав 1 автор
// let books1 = []
// for (let i = 0; i < books.length; i++) {
//     if (books[i].authors.length === 1) {
//         books1.push(books[i]);
//         document.write(`<p>${books[i].title}</p>`)
//     }
// }
// console.log(books1)
//
// 1. Створити пустий масив та :
// let arr = [];
//
//     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 0; arr.length < 50; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr)
//
//     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; arr.length < 50; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i);
//     }
// }
// console.log(arr)
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; arr.length < 20; i++) {
//     arr.push(Math.floor(Math.random() * 1000));
// }
// console.log(arr)
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// for (let i = 0; arr.length < 20; i++) {
//     arr.push(Math.floor(Math.random() * 732) + 8);
// }
// console.log(arr)
//
// 2. Вивести за допомогою console.log кожен третій елемент
// for (let i = 0; i < arr.length; i += 3) {
//         console.log(arr[i])
// }
//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }
//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// let arr2 = [];
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr2)
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//
// let arrV = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arrV.length; i++) {
//     if (arrV[i] % 2 === 0) {
//         console.log(arrV[i-1]);
//     }
// }
//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let arr = [100,250,50,168,120,345,188]
// let sum = 0;
// for (let i of arr) {
//     sum += i;
// }
// console.log(sum);
// let eSum = sum / arr.length;
// console.log(eSum)
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr.push(Math.floor(Math.random() * 1000));
// }
// console.log(arr);
// let arr1 = [];
// for (let ar of arr) {
//     arr1.push(ar * 5);
// }
// console.log(arr1)
//
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
//
// let arrM = [654, true, 'Misha', false, 456, 6892, 'Okten', 'Maietskyi', 23.2, 'Mama']
// let arr2 = [];
// for (let i of arrM) {
//     if (typeof(i) === 'number') {
//         arr2.push(i);
//     }
// }
// console.log(arr2);
//
// – Дано 2 масиви з рівною кількістю об’єктів.
//
//     Масиви:
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив
//
//
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: ‘vasya’,
//              age: 31,
//              status: false,
//     address: {
//              user_id: 1, // <===
//              country: ‘Ukraine’,
//              city: ‘Ternopil’
// }
// },
//
// // TO BE CONTINUED …..
// ]
//
// let users = []
// for (let user of usersWithId) {
//     for (let citiW of citiesWithId) {
//         if (user.id === citiW.user_id) {
//             users.push({...user,
//                 address: citiW});
//         }
//     }
// }
// console.log(users);
//
// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let arr = [21, 713, 672, 582, 942, 548, 19, 931, 185, 321, 32, 363, 632, 453, 258, 729, 277, 215, 690, 976];
// for (let ar of arr) {
//     if (ar % 2 === 0) {
//         console.log(ar);
//     }
// }
//
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// let arr = [21, 713, 672, 582, 942, 548, 19, 931, 185, 321, 32, 363, 632, 453, 258, 729, 277, 215, 690, 976];
// let arr1 = [];
// for (let ar of arr) {
//     arr1.push(ar);
// }
// console.log(arr);
// console.log(arr1);
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
let abc = ['a', 'b', 'c']
let str = '';
// for (let i = 0; i < abc.length; i++) {
//     str += abc[i]
// }
// console.log(str)
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
// let i = 0;
// while (i < abc.length) {
//     str += abc[i]
//     i++
// }
// console.log(str)
//
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.
// for (let i of abc) {
//     str += i;
// }
// console.log(str)