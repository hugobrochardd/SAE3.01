import { ProductCollection } from "./class/product-manager.js";
import { HomeRenderer } from "./renderer/product-renderer.js";
import { CardsRenderer } from "./renderer/product-renderer.js";
import { ProductRenderer } from "./renderer/product-renderer.js";
import { CartRenderer } from "./renderer/cart-renderer.js";
import { CartAdder } from "./renderer/cart-renderer.js";
import { QtyIncrease } from "./renderer/cart-renderer.js";
import { QtyDecrease } from "./renderer/cart-renderer.js";
import { RemoveProduct } from "./renderer/cart-renderer.js";




let M = {
  products: new ProductCollection()
};

let V = {};

let C = {};


const logo = document.querySelector(".logo");
const selectElementNav = document.querySelector(".navbar__select");
const selectElementSide = document.querySelector(".sidenav__select");
const menuItems = document.querySelectorAll(".navbar__items-desktop");
const content = document.querySelector(".content");
const cart = document.querySelector("#cart");


let disableScroll = true;




V.renderHome = function( data ){
  let htmlHome = HomeRenderer(data);
  document.querySelector('.content').innerHTML = htmlHome;
}

V.renderCards = function( data ){
    let htmlCards = CardsRenderer(data);
    document.querySelector('.content').innerHTML = htmlCards;
}

V.renderCart = function(){
  let htmlCart = CartRenderer();
  document.querySelector('.content').innerHTML = htmlCart;
}

V.renderProduct = function( data ){
    let htmlProduct = ProductRenderer(data);
    document.querySelector('.content').innerHTML = htmlProduct;
    let prod = document.querySelector('.products')
    if(prod.dataset.stock=="No"){
      let button = document.querySelector('.product__button')
      button.style.display = "none"
    }
}

V.handler_unsetParallax = function (ev) {
    document.documentElement.style.overflow = 'auto';
    sidenav.classList.remove("active");
    disableScroll = false;
    event.preventDefault();
    const cover = document.querySelector(".parallax");
    cover.style.display = "none";
    const logo = document.querySelector(".logo"); 
    let scaleValue = 1 -  0.78;
    let translateYValue = 240;
    logo.style.transform = "translateY(-" + translateYValue + "px) translateX(-50%) scale(" + scaleValue + ")";
    window.scrollTo(0, 0);
    const navbar = document.querySelector(".navbar");
    navbar.style.opacity = 0.85; 
}

V.handler_setParallax = function (ev) {
    if(disableScroll){
        let offset = window.pageYOffset;
        const perso = document.querySelector(".parallax__perso");
        const content = document.querySelector(".content");
        const logo = document.querySelector(".logo"); 
        const navbar = document.querySelector(".navbar"); 
        perso.style.top = 50 + offset * 0.115 + "%"; 
        content.style.transform = "translateY(0)";
        let opacityValue = Math.min(offset * 0.0009, 0.85);
        navbar.style.opacity = opacityValue;
        let scaleValue = 1 - Math.min(offset * 0.0009, 0.78);
        let translateYValue = Math.min(offset * 0.275, 240);
        logo.style.transform = "translateY(-" + translateYValue + "px) translateX(-50%) scale(" + scaleValue + ")";
    }
}





V.handler_dupliqueElement= function(targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        const clonedElement = targetElement.cloneNode(true);
        targetElement.insertAdjacentElement('beforebegin', clonedElement);
    } else {
        console.error("L'élément cible n'a pas été trouvé.");
    }
}



V.init = function () {

    selectElementSide.addEventListener("change", function() {
        C.handler_changeFilter();
    });
    selectElementNav.addEventListener("change", function() {
        C.handler_changeFilter();
    });

    cart.addEventListener("click", function(ev) {
      C.handler_clickCart(ev);
    });

    content.addEventListener("click", function(ev) {
      C.handler_addCart(ev);
      C.handler_changeQuantity(ev)
      C.handler_clickProduct(ev);
      C.handler_removeProduct(ev)
    });

    logo.addEventListener("click", function() {
        C.handler_resetHome();
    });
    for(let item of menuItems){
        item.addEventListener("click", function() {
            V.handler_unsetParallax();
        });
    };
    window.addEventListener("scroll", function () {
        V.handler_setParallax();
    });
    
}


C.handler_changeFilter = function (ev) {
    const selectedValue = selectElementNav.value;
    if(selectedValue=="All"){
        V.renderCards( M.products.findAll() );
        V.handler_unsetParallax();
    }
    else{
        V.renderCards(M.products.findByCategory(selectedValue));
        V.handler_unsetParallax();
    }

}


C.handler_resetHome = function (ev) {
    document.documentElement.style.overflow = 'auto';
    sidenav.classList.remove("active");
    disableScroll = true;
    const logo = document.querySelector(".logo"); 
    let scaleValue = 1 ;
    let translateYValue = 0;
    logo.style.transform = "translateY(" + translateYValue + "px) translateX(-50%) scale(" + scaleValue + ")";
    const perso = document.querySelector(".parallax__perso");
    perso.style.top = "50%";
    const cover = document.querySelector(".parallax");
    cover.style.display = "block";
    const content = document.querySelector(".content");
    content.style.transform = "translateY(0)"; 
    const navbar = document.querySelector(".navbar");
    navbar.style.opacity = 0; 
    window.scrollTo(0, 0);
    V.renderHome( M.products.findAll() );
}


C.handler_clickProduct = function (ev) {
    const articleElement = ev.target.closest("article");
    if(articleElement.classList=="card"){
      V.renderProduct( M.products.findByProduct(articleElement.dataset.id));
      V.handler_unsetParallax();
    }
    if(articleElement.classList=="cardxl"){
      V.renderProduct( M.products.findByProduct(articleElement.dataset.id));
      V.handler_unsetParallax();
    }
    if(articleElement.classList=="cardLarge"){
      V.renderProduct( M.products.findByProduct(articleElement.dataset.id));
      V.handler_unsetParallax();
    }
    return

}


C.handler_clickCart = function (ev){
  V.renderCart();
  V.handler_unsetParallax();
}


C.handler_addCart = function(ev){
  if(ev.target.dataset.btn=="add"){
    const articleElement = ev.target.closest("article");
    const selectElement = document.querySelector('select[name="quantity"]');
    const optionElement = document.querySelector('select[name="option"]');
    let product = M.products.findByProduct(articleElement.dataset.id)
    CartAdder(product,selectElement.value,optionElement.value)
    //objet contenant le produit, la quantité
  }
  return

}

C.handler_changeQuantity = function(ev){
  const articleElement = ev.target.closest("article");
  let product = M.products.findByProduct(articleElement.dataset.id)
  if(ev.target.dataset.qty=="+"){
    QtyIncrease(product)
    V.renderCart()
  }
  if(ev.target.dataset.qty=="-"){
    QtyDecrease(product)
    V.renderCart()
  }
  return

}

C.handler_removeProduct = function(ev){
  const articleElement = ev.target.closest("article");
  console.log(articleElement)
  let product = M.products.findByProduct(articleElement.dataset.id)
  if(ev.target.dataset.rm=="rm"){
    RemoveProduct(product)
    V.renderCart()
  }
  return

}






C.init = async function () {
  let nb = await M.products.load("http://localhost:8888/api/products");
  //console.log(nb + " products added in the ProductCollection");
  V.renderHome( M.products.findAll() );
  V.init();
};

C.init();









