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
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
// let course = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => ({id: index + 1, ...value}));
//
// console.log(course);
//
//  — відсортувати його за спаданням за monthDuration
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
// let course = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => ({id: index, ...value}));
//
// console.log(course);
//
// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// console.log(coursesArray.filter(value => value.modules.includes('sass')));
// console.log(coursesArray.filter(value => value.modules.includes('js')));
// console.log(coursesArray.filter(value => value.modules.includes('docker')));
//
// let sorte = (arr) => arr.filter(item => item.modules.includes('sass'));
// console.log(sorte(coursesArray));
//
// –написати пошук всіх об’єктів, в яких в modules є docker
//
// let sortDoc = (arr) => arr.filter(item => item.modules.includesAll('docker'));
// console.log(sorte(coursesArray));
//
// let courses = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
//         logo: '',
//         price: 0,
//         rating: 5,
//         avgResult: 99
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.998,
//         avgResult: 97
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'python core',
//             'python advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.812,
//         avgResult: 98
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
//         logo: '',
//         price: 0,
//         rating: 4.65,
//         avgResult: 97
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java'],
//         logo: '',
//         price: 0,
//         rating: 4.772,
//         avgResult: 100
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
//         logo: '',
//         price: 0,
//         rating: 4.53,
//         avgResult: 90
//     }
// ];
//
// console.log(courses.filter(value => value.modules.includes('html')));
// console.log(courses.filter(value => value.modules.includes('css')));
// console.log(courses.filter(value => value.modules.includes('js')));
// console.log(courses.filter(value => value.modules.includes('mysql')));
// console.log(courses.filter(value => value.modules.includes('mongodb')));
//
// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// const suits = ['spade', 'club', 'diamond', 'heart'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const cards = [];
// let cardsMaket = (suitArray, valueArray) => {
//     for (let suit of suitArray) {
//         for (let value of valueArray) {
//             const card = {suit: suit, value: value};
//             if (suit === 'spade' || suit === 'club') {
//                 card.color = 'black'
//             } else if (suit === 'diamond' || suit === 'heart') {
//                 card.color = 'red'
//             }
//             cards.push(card);
//         }
//     }
//     return cards;
// }
//
// cardsMaket(suits, values);
// console.log(cards)
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
// console.log(cards.find(value => value.suit === 'spade' || value.value === 'ace'));
//
//  – всі шістки
// console.log(cards.filter(value => value.value === '6'));
//
//  – всі червоні карти
// console.log(cards.filter(value => value.color === 'red'));
//
//  – всі буби
// console.log(cards.filter(value => value.suit === 'diamond'));
//
//  – всі трефи від 9 та більше
// console.log(cards.filter(value => value.suit === 'club' && value.value !== '6' && value.value !== '7' && value.value !== '8'))
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
// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// const suits = ['spade', 'club', 'diamond', 'heart'];
// const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const cards = [];
// let cardsMaket = (suitArray, valueArray) => {
//     for (let suit of suitArray) {
//         for (let value of valueArray) {
//             const card = {suit: suit, value: value};
//             if (suit === 'spade' || suit === 'club') {
//                 card.color = 'black'
//             } else if (suit === 'diamond' || suit === 'heart') {
//                 card.color = 'red'
//             }
//             cards.push(card);
//         }
//     }
//     return cards;
// }
//
// cardsMaket(suits, values);
// console.log(cards)
//
// Приклад моделі кінцевого об’єкту
//
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reducer = cards.reduce((acc, card) => {
//     switch (card.suit) {
//         case 'spade':
//             acc.spades.push(card);
//             break;
//         case 'diamond':
//             acc.diamonds.push(card);
//             break;
//         case 'heart':
//             acc.hearts.push(card);
//             break;
//         case 'club':
//             acc.clubs.push(card);
//             break;
//     }
//     return acc;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
//
// console.log(reducer)