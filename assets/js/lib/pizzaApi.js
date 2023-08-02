export const display_pizza = (pizza) => {

return `<div class="product-item relative" data-id="${pizza._id}">
<img src="${pizza.image}" width="150" alt="${pizza.name}">
<div class="product-details">
    <div class="product-name">${pizza.name}</div>
    <div class="add-to-cart absolute">
        <i class="bi bi-zoom-in"></i> Détails
    </div>
    <div class="product-price">
        <span class="sold-price">€${pizza.soldPrice/100}</span>
        <span class="regular-price"><del>€${pizza.price/100}</del></span>
    </div>
</div>
</div>`
}


export const display_pizzas = (pizzas) => {
const app = document.querySelector("#app")

app.innerHTML = ""
    pizzas.forEach(pizza => {
const dataHtml = `<div class="product-item relative" data-id="${pizza._id}">
    <img src="${pizza.image}" width="150" alt="${pizza.name}">
    <div class="product-details">
        <div class="product-name">${pizza.name}</div>
        <div class="add-to-cart absolute">
            <i class="bi bi-zoom-in"></i> Détails
        </div>
        <div class="product-price">
            <span class="sold-price">€${pizza.soldPrice/100}</span>
            <span class="regular-price"><del>€${pizza.price/100}</del></span>
        </div>
    </div>
    </div>`
    return app.innerHTML +=dataHtml
});

 
    }
    
















