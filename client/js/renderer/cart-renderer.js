import { CartItem } from "../class/cart-item.js";
import { Cart } from "../class/cart.js";
import { Product } from "../class/product.js";


let cart = new Cart();
const cartProductTemplate = document.querySelector("#cart-product").innerHTML;
const cartTemplate = document.querySelector("#cart-template").innerHTML;

let renderCartProduct = function() {
    let html = "";
    let all = "";
    for(let p of cart.getItems()){
        // on vérifie que p est bien un CartItem
        if (p instanceof CartItem){
            let product = p.getProduct()
            let totalprice = product.getPrice() * p.getQuantity();
            html = cartProductTemplate.replace('{{name}}', product.getName());
            html = html.replace('{{option}}', product.getOption());
            html = html.replace('{{id}}', product.getId_product());
            html = html.replace('{{option-selected}}', p.getOption());////
            html = html.replace('{{price}}', product.getPrice());
            html = html.replace('{{quantity}}', p.getQuantity());
            html = html.replace('{{total-price}}', totalprice.toString());
            html = html.replace('{{url}}', product.getImages()[0]);

            all += html;
        }
    }
    return all;
};


let renderCart = function() {
    let html = "";
    let all = "";
    let totalprice = 0

    for(let p of cart.getItems()){
        totalprice += p.getProduct().getPrice() * p.getQuantity();
    }
    html = cartTemplate.replace('{{total}}',totalprice);
    html = html.replace('{{listproduct}}', renderCartProduct());

    all += html;
    return all;
};






let addCart = function(product, quantity, option) {
    const maxQuantity = 4; // Limite la quantité maximale à 4
    if (product[0] instanceof Product) {
        let existingProduct = cart.getItems().find(p => p.getProduct().getId_product() === product[0].getId_product());
        if (existingProduct) {
            let newQuantity = Math.min(existingProduct.getQuantity() + quantity, maxQuantity);
            existingProduct.setQuantity(newQuantity);
        } else {
            if (quantity > maxQuantity) {
                quantity = maxQuantity; // Limite la quantité maximale à 4 lors de l'ajout initial
            }
            cart.addItem(product[0], quantity, option);
        }
    }
}



let increaseQty = function(product) {
    const maxQuantity = 4;
    let existingProduct = cart.getItems().find(p => {
        const productInCartItem = p.getProduct(); // Accéder au produit dans CartItem
        const productId = productInCartItem.getId_product(); // Accéder à l'ID du produit
        const newProductId = product[0].getId_product(); // Accéder à l'ID du nouveau produit
        return productId === newProductId; // Comparer les deux IDs
    });
    if (existingProduct) {
        let currentQuantity = Number(existingProduct.getQuantity());
        if (currentQuantity < maxQuantity) {
            existingProduct.setQuantity(currentQuantity + 1);
        }
    } else {
        console.error("Product not found in the cart.");
    }
}

let decreaseQty = function(product) {
    const minQuantity = 1;
    let existingProduct = cart.getItems().find(p => {
        const productInCartItem = p.getProduct(); // Accéder au produit dans CartItem
        const productId = productInCartItem.getId_product(); // Accéder à l'ID du produit
        const newProductId = product[0].getId_product(); // Accéder à l'ID du nouveau produit 
        return productId === newProductId; // Comparer les deux IDs
    });
    if (existingProduct) {
        let existingProduct = cart.getItems().find(p => p.getProduct().getId_product() === product[0].getId_product());
        let newQuantity = Math.max(existingProduct.getQuantity() - 1, minQuantity);
        existingProduct.setQuantity(newQuantity);
    } else {
        console.error("Product not found in the cart.");
    }
}

let removeFromCart = function(product) {
    let existingProduct = cart.getItems().find(p => p.getProduct().getId_product() === product[0].getId_product());
    if (existingProduct) {
        let index = cart.getItems().indexOf(existingProduct);
        cart.getItems().splice(index, 1);
    } else {
        console.error("Product not found in the cart.");
    }
}




// ...

export { renderCart as CartRenderer };
export { addCart as CartAdder };
export { increaseQty as QtyIncrease };
export { decreaseQty as QtyDecrease };
export { removeFromCart as RemoveProduct };



