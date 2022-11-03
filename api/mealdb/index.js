const searchMela=search=>{
    const searchField=document.getElementById('search');
    let searchText=searchField.value;
   
    searchField.value='';

 let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
 fetch(url)
 .then(res=>res.json())
 .then(data=> console.log(data.meals[0]))
}