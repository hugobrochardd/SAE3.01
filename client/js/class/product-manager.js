
import { Product } from "./product.js";
import { getRequest, postRequest } from "../api-queries.js";

class ProductCollection {

    #uri; // pour mémoriser l'uri utilisée pour chargée les produits (peut être utile si refresh, enregistrement de produit etc...)
    #products; // tableau de Product

    constructor(){
        this.#uri = "";
        this.#products = [];
    }

    async load(uri){
        this.#uri = uri;
        let objects = await getRequest(uri);
        for(let item of objects){
            let p = new Product(item.id_product, item.name, item.id_category, item.price, item.delivery, item.description, item.category, item.images, item.option, item.options, item.stock);
            this.#add(p);
        }
        return this.#products.length;
    }

    // # marche aussi sur les méthodes
    #add(p){
        if ( p instanceof Product) // prevent from adding object that are not Product instances
            this.#products.push(p);
    }

    async create(name, idcat){
        if (this.#uri == "" ){
            console.log("Warning, the api server uri is not set.");
        }
        let object = await postRequest(this.#uri, {name: name, category: idcat});
        if (object){
            this.#add(new Product(object.id_product, object.name, object.id_category, object.price, object.delivery, object.description, object.category, object.images, object.option, object.options, object.stock));
        }
        else{
            console.log("Fail to create the Product");
        }
    }

    find(id){
        return this.#products.find( p => p.getId()==id );
    }

    findAll(){
        return this.#products;
    }

    findByCategory(idcat){
        return this.#products.filter( p => p.getCategory()==idcat);
    }

    findByProduct(id_product){
        return this.#products.filter( p => p.getId_product()==id_product);
    }

}


export {ProductCollection}

