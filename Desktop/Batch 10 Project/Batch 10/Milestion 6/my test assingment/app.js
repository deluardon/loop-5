// const loadData = async () => {
    
// }

// loadData();
// let x=5;
// x=10;

const add = () => {
    const productfield = document.getElementById("product-name");
    const quantityfield = document.getElementById("product-price");

    const product = productfield.value;
    const quantity = quantityfield.value;
    productfield.value = "";
    quantityfield.value = "";
    displayProduct(product,quantity);
    saveToLocalStorage(product,quantity);

}
const displayProduct = (product,quantity) => {
    console.log(product,quantity);
    const productContainer = document.getElementById("products-conatiner");
    const li = document.createElement("li");
    li.innerText = ` ${product}: ${quantity}`;
    productContainer.appendChild(li);
}
const getStorage = ()=>{
    const storeCart=localStorage.getItem("cart");
    let cart = {};
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}
const saveToLocalStorage = (product,quantity) => {
    const cart=getStorage();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem("cart",cartStringify); 
    
}
const displayStorage = () => {
    const saveCart = getStorage();
    for(const product in saveCart){
       console.log(product);
       const quantity = saveCart[product];
       displayProduct(product,quantity);
    } 
}
