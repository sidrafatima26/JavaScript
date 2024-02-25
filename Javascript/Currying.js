
//Currying is a technique in functional programming that convers a function of multiple argumenst into multiple functions of one argument

function cuboid1(length, breadth, height){
  return length*breadth*height;
}

let cuboid = function(length){
  return function(breadth){
    return function (height){
      console.log( length*breadth*height);
    }
  }
}
cuboid(1,2,3)




//The output should be 5 in both the cases
console.log(sum(2, 3));
console.log(sum(2)(3));

//Method 1

function sum(a, b) {
  return arguments.length === 2 //were two arguments passed?
    ? a + b //yes: return their sum
    : (b) => a + b; //no:  return a function
}

//Currying
// Why is currying useful in JavaScript?

// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// It is very useful in building modular and reusable code
// It helps us to avoid passing the same variable multiple times
// It makes the code more readable

//Currying with Closures
let plus = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

//Currying using bind
let multiply = function (x,y){
  console.log(x*y);
}
let multiplybytwo = multiply.bind(this, 2);
multiplybytwo(3);

//The bind() method of Function instances creates a new function that, when called, calls this function with its this keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    console.log(this.firstName, this.lastName)
  }
}

let display = person.display.bind(person);
setTimeout(display, 3000);
