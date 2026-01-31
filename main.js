// JS. ДЗ 2
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     ДЗ:
//
//
//
//         #67kfznmiMl
//
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//
// let arr = [true, 24, 'string', {age:24}, 'Misha', -87, {name: 'Vika'}, 'Okten', false, 68];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
//
//
// #LARqoUj5I
//
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
//
// let arr1 = {title: 'Vikking', pageCount: 658, genre: 'novel'};
// let arr2 = {title: 'Economic', pageCount: 345, genre: 'busines'};
// let arr3 = {title: 'Kobzar', pageCount: 485, genre: 'poems'};
//
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
//
//     #sA3Gg1sCp
//
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
//
// let arr1 = {title: 'Vikking', pageCount: 658, genre: 'novel', authors: {name:'Jon Row', age: 54}};
// let arr2 = {title: 'Economic', pageCount: 345, genre: 'busines', authors: {name:'Robert Kiosaki', age: 62}};
// let arr3 = {title: 'Kobzar', pageCount: 485, genre: 'poems', authors: {name:'Taras Shewchenko', age: 48}};
//
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
//
//     #jCHFnEbdmFd
//
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// const users = [
//     {name: 'Vika', username: 'Trach', password: '123456'},
//     {name: 'Misha', username: 'Maietskyi', password: '234567'},
//     {name: 'Roman', username: 'Maietskyi', password: '345678'},
//     {name: 'Andrij', username: 'Trach', password: '456789'},
//     {name: 'Daria', username: 'Krupka', password: '567891'},
//     {name: 'Maria', username: 'Krupka', password: '678912'},
//     {name: 'Anna', username: 'Petrivska', password: '789123'},
//     {name: 'Vasul', username: 'Krupka', password: '891234'},
//     {name: 'Vika', username: 'Trach', password: '912345'},
//     {name: 'Misha', username: 'Maietskyi', password: '123456'},
// ]
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);
// console.log(users[4]);
// console.log(users[5]);
// console.log(users[6]);
// console.log(users[7]);
// console.log(users[8]);
// console.log(users[9]);
//
// #coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
//
// let arr = [
//     [18, 32, 25],
//     [15, 30, 24],
//     [16, 28, 22],
//     [17, 30, 24],
//     [18, 26, 26],
//     [17, 29, 25],
//     [16, 31, 28]
// ]
// let arr = [
//         {day: 1, temperature:[18, 32, 25]},
//         {day: 2, temperature:[15, 30, 24]},
//         {day: 3, temperature:[16, 28, 22]},
//         {day: 4, temperature:[17, 30, 24]},
//         {day: 5, temperature:[18, 26, 26]},
//         {day: 6, temperature:[17, 29, 25]},
//         {day: 7, temperature:[16, 31, 28]},
// ]
//
// #bAUsaq6LI
//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('Number');
//
// if (x !== 0){
//     console.log('Cool');
// } else {console.log('Eror')}
//
// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).
//
//
//
//
//
// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
//
//
//
//
//
// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//
//
//
//
//     #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.
//
//         Потрібно знайти та вивести максимальне число з тих двох .
//
//         Також потрібно врахувати, коли введені рівні числа.
//
//
//
//
//
//         #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
//     буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//
//
//
//
//     #awLXL6TBzg
//
//     з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray. За допомогою іф перевірити кожен його елемент на тривалість навчання. У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.