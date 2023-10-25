




var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function openNav() {
  sidenav.classList.add("active");
  document.documentElement.style.overflow = 'hidden';
}

function closeNav() {
  sidenav.classList.remove("active");
  document.documentElement.style.overflow = 'auto';
}


if (window.innerWidth > 850) {
  closeNav();
}











let disableScroll = true;

const menuItems = document.querySelectorAll(".navbar__items-desktop");

for(item of menuItems){
  item.addEventListener("click", function(event) {
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
});
}





const logo = document.querySelector(".logo");

logo.addEventListener("click", function() {
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
});


window.addEventListener("scroll", function () {
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

});










let previousSelected = document.querySelector('.product-selected');

function changeImage(element, imageUrl) {
  document.querySelector('#productImage').src = imageUrl;

  if (previousSelected !== null) {
    previousSelected.classList.remove('product-selected');
  }
  element.classList.add('product-selected');
  previousSelected = element;
}