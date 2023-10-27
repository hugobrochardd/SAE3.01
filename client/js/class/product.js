



/**
 *  Les classes existent aussi en Javascript comme dans tous les langages orientés objets.
 * 
 *  Au besoin, vous avez tout ici : https://fr.javascript.info/classes
 *  Ou là : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
 * 
 * 
 *  Il existe quelques différences de syntaxe et le support des propriétés privées est 
 *  relativement récent donc pas pris en charge pas des navigateurs plus anciens. Mais
 *  Toutes les versions de navigateurs sorties depuis 2021 les supportent donc vous
 *  pouvez vous en servir.
 * 
 */

class Product {
    #id_product;
    #name;
    #id_category; 
    #price; 
    #delivery; 
    #description; 
    #category; 
    #images; 
    #option; 
    #options; 
    #stock; 

    constructor(id_product, name, id_category, price, delivery, description, category, images, option, options, stock){
        this.#id_product = id_product;
        this.#name = name;
        this.#id_category = id_category;
        this.#price = price;
        this.#delivery = delivery;
        this.#description = description;
        this.#category = category;
        this.#images = JSON.parse(images);
        this.#option = option;
        this.#options = JSON.parse(options);
        this.#stock = stock;

    }

    getId_product(){
        return this.#id_product;
    }

    getName(){
        return this.#name;
    }

    getPrice(){
        return this.#price;
    }

    getDelivery(){
        return this.#delivery;
    }

    getDescription(){
        return this.#description;
    }

    getCategory(){
        return this.#category;
    }

    getImages(){
        return this.#images;
    }

    getId_category(){
        return this.#id_category;
    }

    getOption(){
        return this.#option;
    }

    getOptions(){
        return this.#options;
    }

    getStock(){
        return this.#stock;
    }

}

export {Product};