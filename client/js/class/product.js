



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
    _id_product;
    _name;
    _id_category; 
    _price; 
    _delivery; 
    _description; 
    _category; 
    _images; 
    _option; 
    _options; 
    _stock; 

    constructor(id_product, name, id_category, price, delivery, description, category, images, option, options, stock){
        this._id_product = id_product;
        this._name = name;
        this._id_category = id_category;
        this._price = price;
        this._delivery = delivery;
        this._description = description;
        this._category = category;
        this._images = JSON.parse(images);
        this._option = option;
        this._options = JSON.parse(options);
        this._stock = stock;

    }

    getId_product(){
        return this._id_product;
    }

    getName(){
        return this._name;
    }

    getPrice(){
        return this._price;
    }

    getDelivery(){
        return this._delivery;
    }

    getDescription(){
        return this._description;
    }

    getCategory(){
        return this._category;
    }

    getImages(){
        return this._images;
    }

    getId_category(){
        return this._id_category;
    }

    getOption(){
        return this._option;
    }

    getOptions(){
        return this._options;
    }

    getStock(){
        return this._stock;
    }

}

export {Product};