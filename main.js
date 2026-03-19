// JS. ДЗ 10
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//     #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
// // let text = document.getElementById("text");
// // let button = document.getElementById("button");
// button.addEventListener("click", function (ev) {
//     ev.preventDefault();
//     // text.remove();
//     text.style.display = 'none'
// })
//
// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
//
// let myForm = document.forms.myForm;
//
// let text = document.getElementById('text');
// myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     // let age = +document.getElementById('age').value;
//     age = +myForm.age.value;
//     if (age < 18) {
//         text.innerText = `Вибачте, контент не доступний`
//     } else if (age >= 18) {
//         text.innerText = `Приємного перегляду`
//     }
// })
//
// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
//
// let myForm = document.forms.myForm;
//
// myForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//
//     let name = document.getElementById(`name`).value;
//     let surname = document.getElementById(`surname`).value;
//     let age = document.getElementById(`age`).value;
//     let send = document.getElementById(`send`)
//     let text = document.getElementById(`text`)
//
//     let user = {name, surname, age}
//     text.innerText = `Name: ${user.name}, Surname: ${user.surname}, Age: ${user.age}`;
//     // text.innerText = `Name: ${name.value}, Surname: ${surname.value}, Age: ${age.value}`;
// })
//
// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let num = +localStorage.getItem('number');
// num += 1;
// localStorage.setItem('number', num);
//
// document.getElementById('text').innerText = num;
//
// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// sessionsList.push(new Date());
// console.log(sessionStorage);
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
//
// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
// let kg = document.getElementById("kg");
// let text = document.getElementById("text");
// kg.addEventListener('input', (e) => {
//     e.preventDefault();
//     text.textContent = +kg.value * 2.2;
// })

// let kg = document.getElementById("kg");
// let text = document.getElementById("text");
// kg.oninput = function (en) {
//     en.preventDefault();
//     text.innerText = +this.value * 2.2;
// }

//
// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName,objToAdd)
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// localStorage.setItem('arrayKey', JSON.stringify(coursesAndDurationArray))
//
// function addToLocalStorage(arrayName, objToAdd) {
//     let jsonls = JSON.parse(localStorage.getItem(arrayName));
//     if (!jsonls) {
//         new Error(`Немає такого об'єкта в локал сторадж`)
//     }
//     if (typeof (jsonls) === 'object') {
//         jsonls.push(objToAdd)
//     }
//     localStorage.setItem(arrayName, JSON.stringify(jsonls));
// }
//
// addToLocalStorage('arrayKey', {})
//
//     #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
//
// let tabelForm = document.forms['tabel1'];
// let table = document.createElement("table");

// let tabelForm = document.forms['tabel1'];
//
// tabelForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//
//     let oldTable = document.querySelector('table');
//     if (oldTable) oldTable.remove();
//
//     let num1 = +document.getElementById('num1').value;
//     let num2 = +document.getElementById('num2').value;
//     let text = document.getElementById('text').value;
//
//     let table = document.createElement("table");
//
//     for (let i = 0; i < num1; i++) {
//         let tr = document.createElement('tr');
//
//         for (let y = 0; y < num2; y++) {
//             let td = document.createElement('td');
//             td.innerText = text;
//             tr.append(td);
//         }
//
//         table.append(tr);
//     }
//
//     document.body.append(table);
// });
//
//     #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається
//
//
//
//
//
// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів