//Partial application starts with a function. We take this function and create a new one with one or more of its arguments already “set” or partially applied. This sounds odd, but it will reduce the number of parameters needed for our functions.

function sum(a){
  return function(b,c){
    return a+b+c
  }
}
console.log(sum(1)(2,3))
let total = sum(100);
console.log(total(10,20))
