//Global Context:
console.log(this); // Output: Window (in a browser environment)

//Event Handlers:
document.getElementById("myButton").addEventListener("click", function() {
  console.log(this);
});

//Function Context:
function myFunction() {
  console.log(this);
}

myFunction(); // Output: Window (in a browser environment)

//Method Context:
let person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Output: Hello, John

//Constructor Functions:
function Person(name) {
  this.name = name;
}

let john = new Person("John");
console.log(john.name); // Output: John

//Arrow Functions:
let obj = {
  count: 10,
  doSomething: function() {
    setTimeout(() => {
      console.log(this.count);
    }, 1000);
  }
};

obj.doSomething(); // Output: 10

