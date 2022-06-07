const ingredientList = document.querySelector('.ingList');
const selectedIngredients = document.querySelector('.selectedIngredients');
const ingSearch = document.querySelector('.ingSearch');



fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
.then(res => res.json())
.then(res => {
  res.meals.forEach(meal => {
    const firstList = document.createElement('li');
    const secondList = document.createElement('li');
    firstList.innerText = meal.strIngredient;
    secondList.innerText = meal.strIngredient;
    const btnAdd = document.createElement('button');
    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'ggg';
    btnAdd.innerText = "+";


    btnAdd.addEventListener('click', () => {
        const addList = document.createElement('li');
        addList.innerText = meal.strIngredient;
        selectedIngredients.appendChild(addList);
    });

    btnRemove.addEventListener('click', () => {
        const removeList = document.createElement('li');
        removeList.innerText = meal.strIngredient;
        selectedIngredients.removeChild(removeList);
    });


    firstList.append(btnAdd);
    secondList.append(btnRemove);
    ingredientList.append(firstList);
    
  });
});


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

