/*
Object.preventExtensions() is a method in JavaScript that prevents new properties from being added to an object. 
This method effectively makes an object non-extensible, meaning that it cannot have new properties added to it, but existing properties can still be modified or deleted.
*/

const obj = {
  name: 'John',
  age: 30
};

console.log(Object.isExtensible(obj)); // Output: true

Object.preventExtensions(obj);

console.log(Object.isExtensible(obj)); // Output: false

obj.gender = 'male'; // Trying to add a new property

console.log(obj); // Output: { name: 'John', age: 30 }
