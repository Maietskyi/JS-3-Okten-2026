// JS. ДЗ 9
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #8Nmt60ZT
//
// – створити блок,
const div1 = document.createElement("div");
//
// – додати йому класи wrap, collapse, alpha, beta
// div1.classList.add("wrap");
// div1.classList.add("collapse");
// div1.classList.add("alpha");
// div1.classList.add("beta");
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// div1.textContent = 'Hello World!';
//  в css
// – додати цей блок в body.
// document.body.appendChild(div1);
//
// – клонувати його повністю, та додати клон в body.
//
// const div2 = div1.cloneNode(true);
// document.body.appendChild(div2);
//
//     #OPLI89c9G
//
// – Є масив:
//
// let arr = ['Main', 'Products', 'About us', 'Contacts']
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// const cont = document.createElement("ul");
// for (let ar of arr) {
//     let li1 = document.createElement('li');
//     li1.textContent = ar;
//     cont.appendChild(li1);
// }
// document.body.appendChild(cont);
//
// #jeBqHV525U5
//
// – Є масив
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
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.
//
// let container = document.createElement('div');
// for (let item of coursesAndDurationArray) {
//     let list = document.createElement('div');
//     list.textContent = `Title: ${item.title}`;
//     let list2 = document.createElement('p');
//     list2.textContent = `Month Duration: ${item.monthDuration}`;
//     container.append(list, list2);
// }
// document.body.appendChild(container);
//
// =========================
//
//     #Kx1xgoKy8
//
// – Є масив
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
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.
// for (let course of coursesAndDurationArray) {
//     let item = document.createElement('div');
//     item.classList.add('item');
//     let heading = document.createElement('h1');
//     heading.textContent = `Title: ${course.title}`;
//     let description = document.createElement('p');
//     description.textContent = `Month Duration: ${course.monthDuration}`;
//     item.append(heading, description);
//     document.body.appendChild(item);
// }
//
// =========
//
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
//
//