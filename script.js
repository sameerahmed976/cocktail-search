import { getElement } from "./utils/getElement.js";
import { getFetch } from "./utils/getFetch.js";
const formSearch = getElement(".form-search");
// console.log("🚀 ~ file: script.js ~ line 4 ~ form", form)
const products = getElement(".products");
const loading = getElement(".loading");
// const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

let drinksData;
let id;

formSearch.addEventListener("keyup", async (e) => {
  e.preventDefault();
  //   console.log("click");
  loading.classList.add("show-loading");
  let formSearchValue = formSearch.value;
  if (formSearchValue) {
    drinksData = await getFetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${formSearchValue}`
    );
    // console.log(
    //   "🚀 ~ file: script.js ~ line 21 ~ formSearch.addEventListener ~ drinksData",
    //   drinksData
    // );
    loading.classList.remove("show-loading");
    displayProduct();
    formSearch.value = "";
  }
});

const displayProduct = () => {
  products.innerHTML = drinksData.drinks
    .map((drink) => {
      return `<a href="drinks.html" class="card-image"  data-id=${drink.idDrink}  >
            <img src=${drink.strDrinkThumb} alt="image" class="image" />
            <h2 class="card-name">${drink.strDrink}</h2>
          </a>`;
    })
    .join(" ");
};

products.addEventListener("click", async (e) => {
  e.preventDefault();
  window.location.replace("drinks.html");
  // console.log(e.target.classList.contains("image"));
  if (e.target.classList.contains("image")) {
    // console.log("click");
    id = e.target.parentElement.dataset.id;
    console.log(id, typeof id);

    localStorage.setItem("drink", id);
    // const data = await getFetch(
    //   `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    // );
    // console.log(
    //   "🚀 ~ file: script.js ~ line 56 ~ products.addEventListener ~ data",
    //   data
    // );
  }
});

export { products };
