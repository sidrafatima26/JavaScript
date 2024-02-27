// Define a polyfill for the call method
if (!Function.prototype.call) {
  Function.prototype.call = function (context, ...args) {
    // Ensure that the context is an object (or the global object if undefined/null)
    context = context || window;

    // Create a unique property name on the context to store the function reference
    const uniqueProperty = Symbol();
    context[uniqueProperty] = this;

    // Call the function with the provided context and arguments
    const result = context[uniqueProperty](...args);

    // Delete the temporary property from the context
    delete context[uniqueProperty];

    // Return the result of the function call
    return result;
  };
}

// Example usage
var obj = {
  x: 42
};

function getX() {
  return this.x;
}

console.log(getX.call(obj)); // Output: 42
