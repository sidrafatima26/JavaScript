/*This behavior is due to variable scope in JavaScript. 
In JavaScript, variables declared with the var keyword have function-level scope, 
meaning that their scope is limited to the function in which they are declared or, 
if not declared within a function, they have global scope.*/
var x = 10;
function f(){
//If you remove the redeclaration of x i.e. if you write just x = 5 and ommit the var here you wil get 5 5 as output 
  var x = 5; 
  console.log(x);
}
f();
console.log(x);
