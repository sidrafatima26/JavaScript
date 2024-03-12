// Function to add an item to the cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to retrieve cart data
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Example usage
addToCart({ id: 1, name: 'Product 1', price: 10 });
const cartItems = getCart();
console.log(cartItems); // Output: [{ id: 1, name: 'Product 1', price: 10 }]
