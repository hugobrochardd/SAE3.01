import { ProductCollection } from "./class/product-manager.js";
import { productRenderer } from "./renderer/product-renderer.js";


let M = {
  products: new ProductCollection()
};

let V = {};

let C = {};



V.renderHome = function( data ){
  let htmlCards = productRenderer(data);
  document.querySelector('.content').innerHTML = htmlCards;
}


V.init = function () {

};

















/*



V.formatOneCard = function(data){
  let template = document.querySelector('#card');
  let html = template.innerHTML;
  html = html.replace('{{image1}}', data.image1);
  html = html.replace('{{name}}', data.name);
  html = html.replace('{{price}}', data.price);
  return html
}

V.formatAllCards = function(data){
  let html = "";
  for(let i = 0; i < data.length; i++){
    html += V.formatOneCard(data[i]);
  }
  return html
}









V.formatAllCardsByCat = function(data){
  const selectElement = document.querySelector('.navbar__select');
  const selectedValue = selectElement.value;
  let html = "";
  if(selectedValue=="All"){
    for(let i = 0; i < data.length; i++){
        html += V.formatOneCard(data[i]);
    }
  }
  else{
    for(let i = 0; i < data.length; i++){
      if(data[i].category==selectedValue){
        html += V.formatOneCard(data[i]);
      }
    }
  }

  return html
}

V.renderCards = function( data ){
  let htmlCards = V.formatAllCards(data);
  document.querySelector('.filters-content').innerHTML = htmlCards;

}

V.renderCardsByCat = function (data){
  let htmlCards = V.formatAllCardsByCat(data);
  console.log(htmlCards)
  document.querySelector('.filters-content').innerHTML = htmlCards;
  let filters = document.querySelector('.filters');
  filters.style.display = "";
  console.log(filters);
  document.querySelector('.content').innerHTML = ""
  document.querySelector('.content').appendChild(filters);
}
*/










/*
async function init(){
  prod = await getRequest("http://localhost:8888/api/products");
  //cat = await getRequest("http://localhost:8888/api/products/categories");
  V.renderHome(prod);
  //V.renderCategory(cat);
  const selectItems = document.querySelector(".navbar__select");
  selectItems.addEventListener("change", function() {
    V.renderCardsByCat(prod);
  });


}
*/
C.init = async function () {
  let nb = await M.products.load("http://localhost:8888/api/products");
  console.log(nb + " products added in the ProductCollection");
  V.init();
  V.render( M.products.findAll() );
};

C.init();


