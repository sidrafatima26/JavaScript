/*
Object.getOwnPropertyDescriptors() is a method in JavaScript that allows you to get all own property descriptors of an object. 
This method returns an object containing all property descriptors of the specified object.
*/

const obj = {
  name: 'John',
  age: 30,
  get greeting() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
};

const descriptors = Object.getOwnPropertyDescriptors(obj);

console.log(descriptors);
