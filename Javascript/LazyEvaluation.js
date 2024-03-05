// Lazy evaluation using a function
function lazyAdd(a, b) {
  return () => a + b; // Returns a function that computes the sum when invoked
}

// Example usage
const lazyResult = lazyAdd(3, 4); // Does not compute the sum yet
console.log("Before computing the sum"); // This line executes before the sum is computed
console.log(lazyResult()); // Now the sum is computed and printed
