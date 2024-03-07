//When a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. 
//This is known as Shadowing or Variable Shadowing. In JavaScript, the introduction of let and const in ECMAScript 6 along with block scoping allows variable shadowing.

var a = "Global scope";

function shadow(){
  var a = "Inside shadow function block"
  console.log(a);
}

shadow();
console.log(a);
