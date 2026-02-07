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
// console.log('hello world'.length);
//
// console.log('lorem ipsum'.length);
//
// console.log('javascript is cool'.length);
//
//
//
// #8lld9HMxXWB
//
// – Перевести до великого регістру наступні стрінгові значення
//
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
//
// console.log('hello world'.toUpperCase());
//
// console.log('lorem ipsum'.toUpperCase());
//
// console.log('javascript is cool'.toUpperCase());
//
// #ClDsAm7xba7
//
// – Перевести до нижнього регістру наступні стрінгові значення
//
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’
//
// console.log('HELLO WORLD'.toLowerCase());
//
// console.log('LOREM IPSUM'.toLowerCase());
//
// console.log('JAVASCRIPT IS COOL'.toLowerCase());
//
// #0b89BkYZwu
//
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str.length)
// let str2 = str.trim(' ')
// console.log(str2.length);
//
//     #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
//
// let str = 'Ревуть воли як ясла повні';
// let stringToarray = (str) => {
//     return str.split(' ');
// }
// console.log(stringToarray(str));
//
// #Rbr5kEQ
//
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.
//
// let num = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
// console.log(num.map(value => value.toString()));
//
// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
// let nums = [11, 21, 3];
//
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//         return array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         return array.sort((a, b) => b - a);
//     }
// }
//
// console.log(sortNums(nums, 'ascending')); // [3,11,21]
//
// console.log(sortNums(nums, 'descending')); // [21,11,3]
//
// ==========================
//
// #yo06d74c1C
//
// – є масив
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//  — відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
//
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
//
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// console.log(coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value})));
//
// let course = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5)
//     .map((value, index) => ({id: index + 1, ...value}));
// console.log(course);
//
// #4LJn7zBx
//
// взяти з arrays.js масив coursesArray
//
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// –написати пошук всіх об’єктів, в яких в modules є sass
//
// console.log(coursesArray.filter(value => value.modules.includes('sass')));
//
// –написати пошук всіх об’єктів, в яких в modules є docker
// console.log(coursesArray.filter(value => value.modules.includes('docker')));
//
// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// let suits = ['spade', 'club', 'diamond', 'heart'];
// let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']
//
// let cards = [];
// for (let suit of suits) {
//     for (let value of values) {
//         card = {suit: suit, value: value};
//         if (suit === 'spade' || suit === 'club') {
//             card.color = 'black';
//         } else if (suit === 'diamond' || suit === 'heart') {
//             card.color = 'red';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards)
//
// Після опису, використовуючи функції масивів:
//
//     – знайти піковий туз
// console.log(cards.find(value => value.suit === 'spade' && value.value === 'ace'));
//
//  – всі шістки
// console.log(cards.filter(value => value.value === '6'));
//
//  – всі червоні карти
// console.log(cards.filter(value => value.color === 'red'));
//
//  – всі буби
// console.log(cards.filter(card => card.suit === 'spade'));
//
//  – всі трефи від 9 та більше
//
// console.log(cards.filter(value => value.suit === 'club' && value.value !== '6' && value.value !== '7' && value.value !== '8'));
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
//
// Приклад моделі кінцевого об’єкту
//
// let reduc = cards.reduce((acc, cur) => {
//     switch (cur.suit) {
//         case 'spade':
//             acc.spades.push(cur);
//             break;
//         case 'diamond':
//             acc.diamonds.push(cur);
//             break;
//         case 'heart':
//             acc.hearts.push(cur);
//             break;
//         case 'club':
//             acc.clubs.push(cur);
//             break;
//     }
//     return acc;
//
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
// console.log(reduc)
