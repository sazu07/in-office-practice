



function loadData(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=> GetUser(data))

}

function GetUser(data){
   const ul= document.getElementById('disply')
    for (const users of data) {
      const li=  document.createElement('li');
      li.innerText=`${users.name}`
      ul.appendChild(li)

    }
}

