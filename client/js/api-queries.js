/**
 *  Besoin de comprendre comment fonctionne fetch ?
 *  C'est ici : https://fr.javascript.info/fetch
 */



/**
 *  getRequest
 * 
 *  Requête en GET l'URI uri. 
 *  Une requête en GET correspond à une demande de "lecture" de la ressource d'URI uri.
 * 
 *  Par exemple "http://.../products" pour lire tous les produits
 *  Ou "http://.../products/3" pour lire le produit d'identifiant 3
 * 
 *  Le serveur renverra les données au format JSON.
 *  La fonction les retourne après conversion en objet Javascript (ou false si la requête a échoué)
 * 
 *  ATTENTION : La fonction est asynchrone, donc quand on l'appelle il ne faut pas oublier "await".
 *  Exemple : let data = await getRequest(http://.../api/products);
 */
let getRequest = async function(uri){

  let options = {
      method: "GET"
  };

  let response = await fetch(uri, options); // exécution (asynchrone) de la requête et attente de la réponse
  let obj = await response.json(); // extraction du json retourné par le serveur (opération asynchrone aussi)
  return obj; // et on retourne le tout (response.json() a déjà converti le json en objet Javscript)
}


/**
*  postRequest
* 
*  Requête en POST l'URI uri. Par exemple "http://.../products"
* 
*  Une requête en POST correspond à une demande de création d'une ressource (dans l'exemple, création d'un produit)
*  Pour créer la ressource, on fournit les données utiles via le paramètre data.
* 
*  Le serveur retourne en JSON la nouvelle ressource créée en base avec son identifiant.
*  La fonction retourne les données après conversion en objet Javascript (ou false si la requête a échoué)
* 
*  ATTENTION : La fonction est asynchrone, donc quand on l'appelle il ne faut pas oublier "await".
*  Exemple : let data = await postRequest(http://.../api/products, {name:"Pain", category:2});
*/
let postRequest = async function(uri, data){
  // encodage des données au format JSON (à vous de bien transmettre ce que le serveur attend)
  let json = JSON.stringify(data);

  // Défition des options de la requêtes
  let options = {
      method: 'POST',
      headers: {'Content-type': 'application/json;charset=utf-8'}, // on précise que la requête contient du json
      body: json // le json est placé dans le corps de la requête
  }

  let response = await fetch(uri, options); // exécution (asynchrone) de la requête et attente de la réponse
  let $obj = await response.json(); // extraction du json retourné par le serveur (opération asynchrone aussi)
  return $obj; // et on retourne le tout (response.json() a déjà converti le json en objet Javscript)
}


/**
*  deleteRequest
* 
*  Requête en DELETE l'URI uri. Par exemple "http://.../products/3"
* 
*  Une requête en DELETE correspond à une demande de suppression d'une ressource.
*  Par exemple : patchRequest("http://.../products/3") pour supprimer le produit d'identifiant 3
* 
*  La fonction retourne true ou false selon le succès de l'opération
*/
let deleteRequest = async function(uri){
 // Pas implémenté. TODO if needed.
}


/** 
*  patchRequest
* 
*  Requête en PATCH l'URI uri. Par exemple "http://.../products/3"
* 
*  Une requête en PATCH correspond à une demande de modification/mise à jour d'une ressource.
*  Pour modifier la ressource, on fournit les données utiles via le paramètre data.
*  Par exemple : patchRequest("http://.../products/3", {category:1} ) pour modifier la catégorie du produit d'identifiant 3
* 
*  La fonction retourne true ou false selon le succès de l'opération
*/
let patchRequest = async function(uri, data){
 // Pas implémenté. TODO if needed.
}



let V = {}; 

V.formatHome = function(data){
  let template = document.querySelector('#home');
  let html = template.innerHTML;
  html = html.replace('{{image1XL}}', data[7].image1);
  html = html.replace('{{nameXL}}', data[7].name);
  html = html.replace('{{priceXL}}', data[7].price);

  html = html.replace('{{image1News1}}', data[8].image1);
  html = html.replace('{{nameNews1}}', data[8].name);
  html = html.replace('{{priceNews1}}', data[8].price);

  html = html.replace('{{image1News2}}', data[9].image1);
  html = html.replace('{{nameNews2}}', data[9].name);
  html = html.replace('{{priceNews2}}', data[9].price);

  html = html.replace('{{image1Line1-1}}', data[6].image1);
  html = html.replace('{{nameLine1-1}}', data[6].name);
  html = html.replace('{{priceLine1-1}}', data[6].price);

  html = html.replace('{{image1Line1-2}}', data[4].image1);
  html = html.replace('{{nameLine1-2}}', data[4].name);
  html = html.replace('{{priceLine1-2}}', data[4].price);

  html = html.replace('{{image1Line1-3}}', data[5].image1);
  html = html.replace('{{nameLine1-3}}', data[5].name);
  html = html.replace('{{priceLine1-3}}', data[5].price);

  html = html.replace('{{image1L}}', data[1].image1);
  html = html.replace('{{nameL}}', data[1].name);
  html = html.replace('{{priceL}}', data[1].price);

  html = html.replace('{{image1Line2-1}}', data[10].image1);
  html = html.replace('{{nameLine2-1}}', data[10].name);
  html = html.replace('{{priceLine2-1}}', data[10].price);

  html = html.replace('{{image1Line2-2}}', data[11].image1);
  html = html.replace('{{nameLine2-2}}', data[11].name);
  html = html.replace('{{priceLine2-2}}', data[11].price);

  html = html.replace('{{image1Line2-3}}', data[12].image1);
  html = html.replace('{{nameLine2-3}}', data[12].name);
  html = html.replace('{{priceLine2-3}}', data[12].price);

  return html

}

V.renderHome = function( data ){
  let htmlCards = V.formatHome(data);
  document.querySelector('.content').innerHTML = htmlCards;
}





V.formatOneCategory = function(data){
  let template = document.querySelector('#categories');
  let html = template.innerHTML;
  html = html.replace('{{category}}', data);
  return html
}

V.formatCategories = function(data){
  let html = "";
  for(let i = 0; i < data.length; i++){
    html += formatOneCategory(data[i]);
  }
  return html
}

V.renderCategory = function( data ){
  let htmlCategories = V.formatCategories(data);
  document.querySelector('.sidenav__select').innerHTML = htmlCategories;
  document.querySelector('.navbar__select').innerHTML = htmlCategories;
}






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


V.renderCards = function( data ){
  let htmlCards = V.formatAllCards(data);
  document.querySelector('.filters-content').innerHTML = htmlCards;
}





async function init(){
  prod = await getRequest("http://localhost:8888/api/products");
  //cat = await getRequest("http://localhost:8888/api/products/categories");
  V.renderHome(prod);
  //V.renderCategory(cat);
  V.renderCards(prod);
}

init();


