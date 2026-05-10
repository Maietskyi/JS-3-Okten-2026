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
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(jsonCarts => {
        const {carts} = jsonCarts;
        console.log(carts);

        let store = document.createElement('div');
        for (const cart of carts) {

            let cartId = document.createElement('h4');
            document.getElementById('cartId');
            cartId.textContent = `ID - ${cart.id}`;

            let discountedTotal = document.createElement('h5');
            document.getElementById('discountedTotal');
            discountedTotal.textContent = `Discounted Total - ${cart.discountedTotal} UAH`;

            let total = document.createElement('h5');
            document.getElementById('total');
            total.textContent = `Total - ${cart.total} UAH`;

            let totalProducts = document.createElement('h5');
            document.getElementById('totalProducts');
            totalProducts.textContent = `Total Products - ${cart.totalProducts}`;

            let totalQuantity = document.createElement('h5');
            document.getElementById('totalQuantity');
            totalQuantity.textContent = `Total Quantity - ${cart.totalQuantity}`;

            let userId = document.createElement('h5');
            document.getElementById('userId');
            userId.textContent = `User Id - ${cart.userId}`;

            let ol = document.createElement('ol');
                for (const product of cart.products) {
                    console.log(product);
                    let li = document.createElement('li')
                    li.innerText =`
                    Discount Percentage: ${product.discountPercentage}
                    Discounted Total: ${product.discountedTotal}
                    id: ${ product.id }
                    price: ${ product.price }
                    quantity: ${product.quantity}
                    title: ${ product.title }
                    total: ${ product.total }
                    `;

                    let img = document.createElement('img');
                    img.src = `${product.thumbnail}`

                    ol.append(li, img)
                }
            store.append(cartId, discountedTotal, total, totalProducts, totalQuantity, userId, ol);
        }
        document.body.append(store);
    });




//
//     #whXxOBlYS0H
//
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.