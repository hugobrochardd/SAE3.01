import { CartItem } from "./cart-item.js";

class Cart{
    #items;

    constructor() {
        this.#items = [];
    }


    // Ajouter un produit au panier
    addItem(product, quantity, option) {
        const item = new CartItem(product, quantity, option);
        this.#items.push(item);
    }

    // Retirer un produit du panier
    removeItem(product) {
        this.#items = this.#items.filter(item => item.product !== product);
    }

    // Obtenir tous les articles du panier
    getItems() {
        return this.#items;
    }

    // Obtenir le prix total du panier
    getTotalPrice() {
        let total = 0;
        for (const item of this.#items) {
            total += item.product.getPrice() * item.quantity;
        }
        return total;
    }

    // D'autres méthodes pour la gestion du panier peuvent être ajoutées ici
}

export { Cart };
