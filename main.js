// JS. ДЗ 6
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//
//  ‘hello world’
// console.log(`hello world`.length);
//
// ‘lorem ipsum’
// console.log(`lorem ipsum`.length);
//
// ‘javascript is cool’
// console.log(`javascript is cool`.length);
//
//
//
// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
// console.log(`hello world`.toUpperCase());
// console.log(`lorem ipsum`.toUpperCase());
// console.log(`javascript is cool`.toUpperCase());

//
// #ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//
// console.log(`HELLO WORLD`.toLowerCase());
// console.log(`LOREM IPSUM`.toLowerCase());
// console.log(`JAVASCRIPT IS COOL`.toLowerCase());
//
// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
// let str = ` dirty string   `
// let mix = str.trim()
// console.log(str.length)
// console.log(mix.length)
//
//     #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
//
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = `Ревуть воли як ясла повні`;
//
// function stringToarray(arr) {
//     return arr.split(' ');
// }
//
// console.log(stringToarray(str));

// let string = 'Мені тринадцятий минало я пас ягнята за селом'
// let arr = (str) => str.split(' ')
// console.log(arr(string))
//
// let str = `Ревуть воли як ясла повні`;
//
// let stringToarray = (arr) => arr.split(' ');
//
// console.log(stringToarray(str));
//
// let str1 = 'Як умру то поховайте мене на могилі серед степу широкого на Вкраїні милі'
//
// let stringToArray = (string) => string.split(' ')
// console.log(stringToArray(str1))
//
// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//
// let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
// console.log(numbers.map(number => number.toString()));
//
// let num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
//
// console.log(num.map(item => item.toString()));
//
// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
// let nums = [11, 21, 3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
//
// function sortNums(array, direction) {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b)
//     }
//     if (direction === 'descending') {
//         return array.sort((a, b) => b - a)
//     }
// }
//
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
//
// console.log(sortNums(nums, 'descending')); // [21,11,3]
//
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {return array.sort((a, b) => a - b)}
//     if (direction === 'descending') {return array.sort((a, b) => b - a)}
// }
//
// console.log(sortNums([33,56,2,97,1,24,6], 'ascending'))
// console.log(sortNums([33,56,2,97,1,24,6], 'descending'))
//
// ==========================
//
// #yo06d74c1C
//
// – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
//
//
//
//
//
//
//
//
//
//
// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// –написати пошук всіх об’єктів, в яких в modules є docker
//
//
//
//
//
// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }
//
//
//
//
//
//
//
// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }