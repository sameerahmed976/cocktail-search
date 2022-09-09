// ------------------
import { getElement } from "./utils/getElement.js";
import { getFetch } from "./utils/getFetch.js";
const singleDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const data = await getFetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    // console.log("🚀 ~ file: drink.js ~ line 11 ~ singleDrink ~ data", data);
    const list = [
      data.drinks[0].strIngredient1,
      data.drinks[0].strIngredient2,
      data.drinks[0].strIngredient3,
      data.drinks[0].strIngredient4,
      data.drinks[0].strIngredient5,
    ];
    const product = getElement(".product");
    product.innerHTML = `<img src=${
      data.drinks[0].strDrinkThumb
    } alt="image" class="product-image" />
        <h1 class="title">${data.drinks[0].strDrink}</h1>
        <p class="paragraph">${data.drinks[0].strInstructions}</p>
        <ul class="list">
    ${list
      .map((ele) => {
        if (!ele) {
          return;
        }
        return `<li>${ele}</li>`;
      })
      .join(" ")}
        </ul>`;
  }
};

singleDrink();
