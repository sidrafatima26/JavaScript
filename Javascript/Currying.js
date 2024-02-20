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
let plus = function sum(x) {
  return function (y) {
    console.log(x + y);
  };
};
