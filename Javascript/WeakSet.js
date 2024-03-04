// Create a WeakSet
let weakSet = new WeakSet();

// Create objects to be added to the WeakSet
let obj1 = {};
let obj2 = {};
let obj3 = {};

// Add objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// Check if objects are in the WeakSet
console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true
console.log(weakSet.has(obj3)); // Output: false, obj3 is not added

// Remove an object from the WeakSet
weakSet.delete(obj1);

// Check if obj1 is still in the WeakSet
console.log(weakSet.has(obj1)); // Output: false
