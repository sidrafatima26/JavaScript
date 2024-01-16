//CallBack functions are functions that are passed as an argument to another function that executes the callback based on an output.

//Functions are executed inthe sequence in which they are called not based on the sequence in which they are defined
fun2();
fun1();
function fun1(){
  console.log("Inside fun1")
}
function fun2(){
  console.log("Indside fun2")
}

//Sequence Control: SOmetime we want better control over the sequnce in which fiunctions are called.
//The problem in this case is we have to call two functions to display the result
function calc(a,b){
  let sum = a+b;
  return sum;
}
function disp(value){
  console.log(value);
}
const res = calc(10,20);
disp(res);
//The problem in this case is that you cannot prevent display function to be called
function cal(a,b){
  const plus = a+b;
  display(plus);
  return plus;
  
}
function display(value){
  console.log(value);
}
cal(40,60);

//Callback Function

function calculator (num1, num2, show){
  const sum = num1+num2;
  show(sum);
}
function show(sum){
  console.log("Output of callback function ", sum);
}

calculator(30,70, show);

//Remove negative numbers from an array
let arr = [0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5, -6, 6];

function removeNeg( arr, callbackFun){
  let newArr=[];
  for (const item of arr) {
    if(callbackFun(item)){
      newArr.push(item)
    }
  }
  console.log(newArr);
}

function callbackFun(item) {
  if(item > 0)
    return true;
}

removeNeg(arr, callbackFun);

//Anonymous functions
const anonymous = function(){
  console.log("I am an anonymous function");
}
anonymous();

//CallBack Hell. Happens when a function conatins a callback as an argument which inturn conatins an argument this keeps on going. Multiple nested callback functions result in unreadable and hard-to-maintain code. It can be mitigated using Promises, async/await, or modularization. 

setTimeout(function(){
  console.log("CallBack 1");
  setTimeout(function(){
    console.log("CallBack 2")
    setTimeout(function(){
      console.log("Callback 3")
      //Many more functions can be nested inside
    }, 1000)
  },1000)
},1000);


