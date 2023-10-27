import { Product } from "./product.js";

class CartItem{
    #product;
    #quantity;
    #option

    constructor(product, quantity, option) {
        this.#product = product;
        this.#quantity = quantity;
        this.#option = option;
    }
    
    getProduct() {
        return this.#product;
    }

    getQuantity() {
        return this.#quantity;
    }

    setQuantity(quantity) {
        this.#quantity = quantity;
    }

    getOption() {
        return this.#option;
    }

    // Ajoutez d'autres méthodes utiles selon les besoins de votre application
}

export { CartItem };
