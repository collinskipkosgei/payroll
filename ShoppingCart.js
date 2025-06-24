class ShoppingCart {
    calculateTotal(products) {
        let totalPrice = products.reduce((total, item) => total + item.price * item.quantity, 0);
        if (totalPrice > 100) {
            totalPrice *= 0.9; 
        }
        totalPrice *= 1.08; 
        return totalPrice;
    }
}

const cart = new ShoppingCart();
const products = [{ price: 30, quantity: 3 }, { price: 20, quantity: 2 }];
console.log(cart.calculateTotal(products)); 
