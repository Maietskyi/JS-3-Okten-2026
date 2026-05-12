// JS. ДЗ 11
// Коди з лекцій та коди з ДЗ
//
// https://github.com/OktenSchool/javascript.git
//
//
//
//     #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
//
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(jsonCarts => {
//         const {carts} = jsonCarts;
//         console.log(carts);
//
//         let store = document.createElement('div');
//         for (const cart of carts) {
//
//             let cartId = document.createElement('h4');
//             document.getElementById('cartId');
//             cartId.textContent = `ID - ${cart.id}`;
//
//             let discountedTotal = document.createElement('h5');
//             document.getElementById('discountedTotal');
//             discountedTotal.textContent = `Discounted Total - ${cart.discountedTotal} UAH`;
//
//             let total = document.createElement('h5');
//             document.getElementById('total');
//             total.textContent = `Total - ${cart.total} UAH`;
//
//             let totalProducts = document.createElement('h5');
//             document.getElementById('totalProducts');
//             totalProducts.textContent = `Total Products - ${cart.totalProducts}`;
//
//             let totalQuantity = document.createElement('h5');
//             document.getElementById('totalQuantity');
//             totalQuantity.textContent = `Total Quantity - ${cart.totalQuantity}`;
//
//             let userId = document.createElement('h5');
//             document.getElementById('userId');
//             userId.textContent = `User Id - ${cart.userId}`;
//
//             let ol = document.createElement('ol');
//             for (const product of cart.products) {
//                 console.log(product);
//                 let li = document.createElement('li')
//                 li.innerText = `
//                     Discount Percentage: ${product.discountPercentage}
//                     Discounted Total: ${product.discountedTotal}
//                     id: ${product.id}
//                     price: ${product.price}
//                     quantity: ${product.quantity}
//                     title: ${product.title}
//                     total: ${product.total}
//                     `;
//
//                 let img = document.createElement('img');
//                 img.src = `${product.thumbnail}`
//
//                 ol.append(li, img)
//             }
//             store.append(cartId, discountedTotal, total, totalProducts, totalQuantity, userId, ol);
//         }
//         document.body.append(store);
//     });
//
//     #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(jsonCarts => {
//         const {recipes} = jsonCarts;
//
//         let container = document.createElement('div')
//         let recipeText = document.createElement('ol')
//         for (const recipe of recipes) {
//             console.log(recipe)
//
//
//             let pizza = document.createElement('li')
//             pizza.innerText = `
//                 id: ${recipe.id},
//                 Name: ${recipe.name},
//             `;
//
//             let img = document.createElement('img');
//             img.src = recipe.image;
//
//             pizza.prepend(img);
//
//             if (recipe.ingredients) {
//
//                 let h3Ingredients = document.createElement('h3')
//                 h3Ingredients.innerText = 'Ingredients'
//                 pizza.append(h3Ingredients)
//
//                 for (const ingredient of recipe.ingredients) {
//
//                     let ingredientText = document.createElement('p')
//                     ingredientText.innerText = `${ingredient}`;
//
//                     pizza.append(ingredientText)
//                 }
//             }
//
//             if (recipe.instructions) {
//
//                 let h3Instructions = document.createElement('h3')
//                 h3Instructions.innerText = 'Instructions'
//                 pizza.append(h3Instructions)
//
//                 for (const instruction of recipe.instructions) {
//
//                     let instructionsText = document.createElement('p')
//                     instructionsText.innerText = `${instruction}`;
//
//                     pizza.append(instructionsText)
//                 }
//             }
//
//             let detailText = document.createElement('h4')
//             detailText.innerText = 'Detail'
//             pizza.append(detailText)
//
//             let detail = document.createElement('p')
//             detail.innerText = `
//                 prep Time Minutes: ${recipe.prepTimeMinutes},
//                 cook Time Minutes: ${recipe.cookTimeMinutes},
//                 servings: ${recipe.servings},
//                 difficulty: ${recipe.difficulty},
//                 cuisine: ${recipe.cuisine},
//                 calories Per Serving: ${recipe.caloriesPerServing},
//             `;
//
//             pizza.append(detail)
//
//             recipeText.append(pizza)
//         }
//         container.append(recipeText)
//         document.body.append(container)
//     })