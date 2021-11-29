const loadData = () => {
    const getId = document.getElementById('input_field');
  const getValue = getId.value;

  getId.value = ''
  card_container.textContent = ''
  
  if (getValue=='') {
    document.getElementById('not').style.display = 'block';
    
  } else {
    document.getElementById('not').style.display = 'none';
      const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${getValue}`);
    fetch(url)
        .then(res => res.json())
        .then(data => seeFood(data.meals))
  }
}

const seeFood =meals => {
    // console.log(meals.length);
  const card_container = document.getElementById('card_container');
  card_container.textContent = ''
 
    meals.forEach(element => {
      
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
      <div onclick="loadMealDetails(${element.idMeal})" class="card">
       <img src="${element.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.strMeal}</h5>
        <p class="card-text">${element.strInstructions.slice(0,100)}</p>
      </div>
    </div>
      `
      card_container.appendChild(div);

  });
  

}

const loadMealDetails=mealId=> {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
  console.log(meal);
  let mealDetails = document.getElementById('meal-details');
  let div = document.createElement('div')
  mealDetails.innerHTML=''
  div.innerHTML = `
  <div class="card  mx-auto mb-5" style="width: 80%; text-align:center;">
  <img src="${meal.strMealThumb}" class="card-img-top" style='width:60%'>
  <div class="card-body">
    <h5 class="card-title fs-1">${meal.strMeal}</h5>
    <p class="card-text fs-2">${meal.strInstructions}</p>
    <a href="${meal.strYoutube}">watch</a>
  </div>
</div>

  `
mealDetails.appendChild(div)

}



