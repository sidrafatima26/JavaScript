//When a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. 
//This is known as Shadowing or Variable Shadowing. In JavaScript, the introduction of let and const in ECMAScript 6 along with block scoping allows variable shadowing.

//When you declare a variable using var inside a block (like inside an if statement), it doesn't create a new block-level scope. Instead, it has a function-level scope or global scope, depending on where it's declared. 
function shadowA(){
  var a = "Global scope A same scope changes the value";
  if(true){
    var a = "Inside shadow A function block " 
    console.log(a);
  }
  console.log(a);
}
shadowA();

//Shadowing in case of var
var e = "This is global E var and var"
function shadowE(){
    var e = "This is inside Shadow E"
    console.log(e)
  }
shadowE();
console.log(e)

//Let and let works
function shadowD(){
  let d = "Global Scope D let and let"
  if(true){
    let d = "inside shadow D"
    console.log(d);
  }
  console.log(d);
}
shadowD()

//You can shadow a variable that is already declared with var in a differtn scope to another variable declared with let with the same name in a differt scope.
function shadowB(){
  var b = "Global Scope B var and let"
  if(true){
    let b = "inside shadow B"
    console.log(b);
  }
  console.log(b);
}
shadowB()

//This is illegal shadowing. You cannot shadow a variable already declared with let in another scope to a variable with the ame name delcared with var in another scope.
function shadowC(){
  let c = "Global Scope C let and var"
  if(true){
   // var c = "inside shadow C" //This will give error c has already been declared
    console.log(c);
}
console.log(c);
}
shadowC()
