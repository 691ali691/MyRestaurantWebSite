
const searchForm = document.querySelector(".searchtwo");

const searchInput = document.querySelector("#search");

searchInput.addEventListener('click',function(){
    searchForm.classList.toggle("active");
   
})

const shoppingCartButton = document.querySelector("#shop-cart");

const shoppingCartItems = document.querySelector(".cart-item-container");

shoppingCartButton.addEventListener('click',function(){
    shoppingCartItems.classList.toggle("active");
})


const barButton = document.querySelector("#bars");

const navbarMenu = document.querySelector(".navbar");

barButton.addEventListener('click',function(){
    navbarMenu.classList.toggle("active");
})