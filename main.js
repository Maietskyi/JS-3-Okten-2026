// JS. ДЗ 8
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #iz6emEsP2BA
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
// console.log(coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value})));
//
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
//
//     #AiN5CoUQ
//
//     Створити функцію, яка робить глибоку копію об’єкта.
//
//         Додати перевірки на undefined, null, NaN.
//
//         Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
//
// let obj = {
//     name: "John",
//     password: 5463,
//     email: "john@gmail.com",
//     drive: function () {
//     },
//     drivers: function () {
//     }
// }
//
// function copiObj(obj) {
//     if (obj) {
//         let functions = [];
//         for (let key in obj) {
//             if (typeof obj[key] === "function") {
//                 copiFunction = obj[key].bind({});
//                 functions.push({copiFunction, key});
//             }
//         }
//         clonObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             clonObj[func.key] = func.copiFunction;
//         }
//         return clonObj;
//     }
//     throw new Error(`Помилка об'єкту`)
// }
//
// console.log(copiObj(obj));
//
// function copiObj(obj) {
//     if (obj) {
//         let functions = []
//         for (const key in obj) {
//             console.log(typeof obj[key]);
//             if (typeof obj[key] === "function") {
//                 let functuinClone = obj[key].bind({});
//                 functions.push({functuinClone, key});
//             }
//         }
//         console.log(functions);
//         let clonObj = JSON.parse(JSON.stringify(obj));
//         for (const func of functions) {
//             clonObj[func.key] = func.functuinClone;
//         }
//         return clonObj
//     }
//     throw new Error('!!!!!')
// }
//
// console.log(copiObj(obj));
