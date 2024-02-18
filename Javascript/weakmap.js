// Create a WeakMap
const weakMap = new WeakMap();

// Create some objects
const obj1 = {};
const obj2 = {};

// Set key-value pairs in the WeakMap
weakMap.set(obj1, 'value associated with obj1');
weakMap.set(obj2, 'value associated with obj2');

// Get values from the WeakMap
console.log(weakMap.get(obj1)); // Output: value associated with obj1
console.log(weakMap.get(obj2)); // Output: value associated with obj2

// Check if an object exists as a key in the WeakMap
console.log(weakMap.has(obj1)); // Output: true
console.log(weakMap.has(obj3)); // Output: false, as obj3 hasn't been added to the WeakMap

// Delete a key-value pair from the WeakMap
weakMap.delete(obj1);

// Get the size of the WeakMap
console.log(weakMap.size); // Output: undefined, as size is not supported in WeakMap
