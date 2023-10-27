




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








let previousSelected = document.querySelector('.product-selected');

function changeImage(element, imageUrl) {
  document.querySelector('#productImage').src = imageUrl;
  if (previousSelected !== null) {
    console.log(previousSelected)
    previousSelected.classList.remove('product-selected');
  }
  element.classList.add('product-selected');
  previousSelected = element;
}



let previousPopupSelected = document.querySelector('.popup-selected');

function changePopup(element){
  if(previousPopupSelected !== null) {
    previousPopupSelected.classList.remove('popup-selected');
  }
  element.classList.add('popup-selected');
  previousPopupSelected = element;
}