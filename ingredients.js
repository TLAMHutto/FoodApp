const ingredientList = document.querySelector('.ingList');
const selectedIngredients = document.querySelector('.selectedIngredients');
const ingSearch = document.querySelector('.ingSearch');
// const addBtn = document.querySelector('.addBtn');
const clearBtn = document.getElementById('#undoBtn');



fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  .then(res => res.json())
  .then(res => {
    for (let i = 0; i < res.meals.length; i++) {
    ingredientList.innerHTML += `<li>${res.meals[i].strIngredient}
    <button onclick="addBtn()" data-ingredient="${res.meals[i].strIngredient}">Add</button></li>`;
    addBtn=() => {
        console.log(res.meals[i].strIngredient);
    }
    }
    }
    );
window.onload = function() {
    ingSearch.addEventListener('keyup', function(e) {
        let search = e.target.value.toLowerCase();
        let ingredients = ingredientList.getElementsByTagName('li');
        Array.from(ingredients).forEach(function(ingredient) {
            let item = ingredient.firstChild.textContent;
            if (item.toLowerCase().indexOf(search) != -1) {
                ingredient.style.display = 'block';
            } else {
                ingredient.style.display = 'none';
            }
        });
    });
}
//append to the list
// ingredientList.innerHTML += `<li>${res.meals[i].strIngredient}
// <button onclick='addBtn()'>+</button></li>`;
// addBtn=()=>{
// console.log(res.meals.strIngredient);

