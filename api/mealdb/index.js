const searchMela=search=>{
    const searchField=document.getElementById('search');
    let searchText=searchField.value;
   
    searchField.value='';

 let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
 fetch(url)
 .then(res=>res.json())
 .then(data=> {
  getMeal(data.meals)
 
 })
}

let getMeal=(meals)=>{
const searchRssult=document.getElementById('search-body');
searchRssult.textContent='';
if(meals){
  meals.forEach( meal => {
   
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML=`
    <div onclick="showDetails(${meal.idMeal})" class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text"> ${meal.strInstructions.slice(0,200)}</p>
    </div>
  </div>`
  searchRssult.appendChild(div)
})
}else{
  const div = document.createElement('div');
  div.classList.add('col')
  div.innerHTML=`
  <h1> Not Found</h1>
 `
searchRssult.appendChild(div)
}
}

const showDetails=meals=>{
  const mealId=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals}`
  fetch(mealId)
  .then(res=>res.json())
  .then(data=>displayMeal(data.meals[0]))
}
const displayMeal=meal=>{
  const detailsContainer=document.getElementById('details')
  detailsContainer.textContent='';
  const div=document.createElement('div')
  div.classList.add('card')
  div.innerHTML=`

     <img src="${meal.strMealThumb}" height="350px" alt="...">
     <div class="card-body">
         <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
     </div>
     <a  href="" class="btn btn-primary">Go somewhere</a>
  `
  detailsContainer.appendChild(div)
}

