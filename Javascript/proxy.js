// Create an object
const targetObject = {
  name: 'John',
  age: 30
};

// Create a proxy for the object
const handler = {
  get: function(target, prop) {
    // Intercepting property access
    console.log(`Getting property "${prop}"`);
    return target[prop];
  },
  set: function(target, prop, value) {
    // Intercepting property assignment
    console.log(`Setting property "${prop}" to "${value}"`);
    target[prop] = value;
  }
};

const proxyObject = new Proxy(targetObject, handler);

// Accessing properties through the proxy
console.log(proxyObject.name); // Logs: Getting property "name"
proxyObject.age = 35; // Logs: Setting property "age" to "35"
