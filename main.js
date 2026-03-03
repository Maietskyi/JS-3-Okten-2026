// JS. ДЗ 10
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//     #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
//
// 1 Варіант
//
// let text = document.createElement("p");
// text.id = "text";
// text.innerText = 'При натисканні я зникну';
//
// let button = document.createElement('button');
// button.id = 'butt';
// button.innerText = 'Cовати';
//
// button.addEventListener('click', function () {
//     let text = document.getElementById('text');
//     text.style.display = 'none';
// })
//
// document.body.append(button, text);

// 2 Варіант
// let button = document.getElementById("butt");
// button.addEventListener('click', function () {
//     // document.getElementById("text").style.display = "none";
//     // document.getElementById('text').remove();
//     // document.getElementById('text').innerText = '';
// });
//
// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
//
// let myForm = document.getElementById("myForm");
// myForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//
//     let age = +document.getElementById("age").value;
//     if (!age) {
//         text.innerText = "Будь ласка, введіть вік";
//     } else if (age < 18) {
//         let text = document.getElementById("text");
//         text.innerText = `Вибачте, але Ваш вік менше 18 років`;
//     } else if (age >= 18) {
//         let text = document.getElementById("text");
//         text.innerText = `Ласкаво прошу!`
//     }
//     document.getElementById("age").value = '';
// })
//
// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
//
// let myForm = document.forms.myForm;
// myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let name = document.getElementById("name").value;
//     let surname = document.getElementById("surname").value;
//     let age = document.getElementById("age").value;
//     let obj = ({name, surname, age});
//     console.log(obj)
//     let text = document.getElementById("text");
//     text.innerText = `Name: ${name}, Surname: ${surname}, Age: ${age}`;
//
//     document.getElementById("name").value = '';
//     document.getElementById("surname").value = '';
//     document.getElementById("age").value = '';
// });
//
// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let update = +localStorage.getItem('updateNumber');
// update += 1;
// localStorage.setItem('updateNumber', update);
//
// document.getElementById('text').innerText = update;
//
// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
//
// let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
// sessionsList.push(new Date());
// console.log(sessionsList);
// localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
//
// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
//
// let elementKG = document.getElementById('kg');
// let text = document.getElementById('text');
// elementKG.addEventListener('input', function (e) {
//     e.preventDefault();
//     text.innerText = +this.value * 2.2;
// })
//
// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
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
//
// tabelForm.addEventListener('submit', function (e) {
//     table.innerText = '';
//     e.preventDefault();
//     let num1 = +document.getElementById('num1').value;
//     let num2 = +document.getElementById('num2').value;
//     let text = document.getElementById('text').value;
//
//     for (let i = 0; i < num1; i++) {
//         let tr = document.createElement('tr');
//         for (let y = 0; y < num2; y++) {
//             let td = document.createElement('td');
//             td.innerText = text;
//             tr.append(td);
//         }
//         table.append(tr);
//     }
// })
// document.body.appendChild(table);
let tabelForm = document.forms['tabel1'];

tabelForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;
    let text = document.getElementById('text').value;

    let table = document.createElement("table");

    for (let i = 0; i < num1; i++) {
        let tr = document.createElement('tr');

        for (let y = 0; y < num2; y++) {
            let td = document.createElement('td');
            td.innerText = text;
            tr.append(td);
        }

        table.append(tr);
    }

    document.body.append(table);
});
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