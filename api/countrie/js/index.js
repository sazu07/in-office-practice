const loadCountrie=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}


loadCountrie();

const displayCountry=countries=>{

    countries.forEach(country=>{
        // console.log(country);
        const countryContainer=document.getElementById('country-list');
        const div=document.createElement('div');
        div.classList.add('demo')
        div.innerHTML=`<h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="countryByName('${country.name.common}')">Details</button>
        `
        countryContainer.appendChild(div);

         
    })

}

const countryByName=(name)=>{
   const url=`https://restcountries.com/v3.1/name/${name}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>showDetails(data[0]))
}

const showDetails=data=>{
    console.log(data)
   const detailsContainer= document.getElementById('details');
   detailsContainer.innerHTML=`
   <h2>country:${data.name.common}</h2>
   <p>population${data.population}</p>
   
   <img width="110px" height="110px"src="${data.coatOfArms.png}">
   `
}