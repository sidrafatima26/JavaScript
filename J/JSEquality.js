// Loose Equality and Strict equality in JS
console.log(0.1 + 0.2 == 0.3);
console.log("true" == true);
console.log("1" == 1);
console.log(undefined === null);
console.log(NaN === NaN);

//Object.keys returnes the keys of an object in ascending order
let x = { b: 1, c: 2 };
let y = Object.keys(x);
console.log(y.length);

let a = { 40: "fourty", 30: "thirty", 20: "twenty" };
console.log(a);
let b = Object.keys(a); // Returnes in ascending order
console.log(b);

//A common use of JSON.parse is to get data from the Web API. Usually the API returnes the value as a string. JSON.parse converts the string returned form a webserver into JavaScript object
let c = ' { "b" : 1, "c" : 2 } ';
let d = JSON.parse(c);
console.log(d);
console.log(typeof d);

//Boolean function returnes true or false
let e = [];
console.log(Boolean(e));

//Empty
let f = () => {
  console.log(this);
};
f();
console.log(typeof f);

//arguments[] takes tha index of the parameters of a function and returns its value
function g(a, b) {
  console.log(arguments[0]);
}
g(3);

let h = "b";
let i = "a";
console.log(h + i + +i + i);

//+ makes it a number
let j = true + true;
console.log(j);

//Returns octal representation of the number 25
console.log(0025);

//Async Await and the use of try catch
function l() {
  let strng = "You are inside the try block of async function k";
  return strng;
}
async function k() {
  try {
    let response = await l();
    console.log(response);
  } catch (error) {
    console.log("An error occured");
  }
}
k();
