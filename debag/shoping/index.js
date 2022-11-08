const displaLocalStorageCart=()=>{
   const cart=getCart();
   for (const name in cart) {
    displayProduct(name)
   }
}


const addItem=()=>{
    const inputField=document.getElementById('input');
    const name=inputField.value;
if(!name){
    return;
}

     // display localStorage
     displayProduct(name);

    // add to localStorage
    addProductToCart(name);

   

    inputField.value='';

}

const displayProduct=(name)=>{
    const ul=document.getElementById('product');
    const li= document.createElement('li');
    li.innerText=name;
    ul.appendChild(li)

}

const getCart=()=>{
    const cart=localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject=JSON.parse(cart);

    }else{
        cartObject={}
    }
    return cartObject;
}
const addProductToCart=name=>{
    const cart=getCart();
    if (cart[name]) {
        cart[name]=cart[name]+1;
    }else{
        cart[name]=1;
    }
    const cartStringifyField=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringifyField)
    
}

const placeOrder=()=>{
    document.getElementById('product').textContent='';
    localStorage.removeItem('cart')
}
displaLocalStorageCart();