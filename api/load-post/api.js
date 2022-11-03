

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>getPost(data))
}

loadPost();

function getPost(post){

console.log('Hello')
const section=document.getElementById('disply-post')

for (const posts of post) {
    const div= document.createElement('div');
    div.classList.add('demo')
    div.innerHTML=`
     <h2 class="header">${posts.title}</h3>
     <p class="paragraph">${posts.body}</p>
    `
 
    section.appendChild(div)
}

}
