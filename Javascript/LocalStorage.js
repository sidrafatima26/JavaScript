// Function to add an item to the shopping cart
function addToCart(item) {
    // Check if there's already a shopping cart in localStorage
    let cart = localStorage.getItem('cart');
    if (!cart) {
        // If not, initialize an empty array
        cart = [];
    } else {
        // If yes, parse the JSON string to an array
        cart = JSON.parse(cart);
    }

    // Add the item to the cart array
    cart.push(item);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to retrieve the shopping cart items
function getCartItems() {
    // Get the cart from localStorage
    const cart = localStorage.getItem('cart');
    // Parse the JSON string to an array and return it
    return cart ? JSON.parse(cart) : [];
}

// Example usage:
// Add items to the shopping cart
addToCart({ id: 1, name: 'Product 1', price: 10 });
addToCart({ id: 2, name: 'Product 2', price: 20 });

// Retrieve the shopping cart items
const itemsInCart = getCartItems();
console.log(itemsInCart); // Output the items in the shopping cart
