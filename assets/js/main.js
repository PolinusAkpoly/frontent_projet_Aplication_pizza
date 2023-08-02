import { getData } from "./lib/fetchApi.js";
import { display_pizza, display_pizzas } from "./lib/pizzaApi.js";

window.onload = async () =>{
const apiUrl = "http://localhost/api/pizzas.php"
const pizzas = await getData(apiUrl)
display_pizzas(pizzas)

// const app = document.querySelector("#app");


// app.innerHTML = ""
// pizzas.forEach(pizza => {
//     app.innerHTML +=display_pizza(pizza)

// });





// console.log(pizzas);




}























