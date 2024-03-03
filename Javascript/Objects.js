//An object in JS is a collection of properties. These properties are a set of key value pairs. These key value pars can be a function which in this case will be called a method.

let person = {
  firstName : 'ABC',
  lastName : 'DEF',
  ph: '12121',
  email: 'fs@gmail.com',
  fullname : function(){
    return this.firstName + " " + this.lastName;
  } 
}
console.log(person);
//If you call the function inside of an object without the parenthesis it will print the function definition. With () it will call the function.
console.log(person.fullname());
//Adding a method to an object
person.ID = function(){
  return this.id + " " + this.email;
}
console.log(person.ID());
console.log(person);
//Accessing the properties of an object through loop. [] must be used to access the values of the key value pairs
let text = ''
for (let item in person){
  text+= person[item];
}
console.log(text);
//Convert Object into an array. You can conevrt the values of an object into an array by using Object.values() method
let arr = Object.values(person);
console.log(arr);
/*Convet an object into a string. JSON.stringify converts a Javascript object or value to a string. It converts :
1. JS Object --> String
2. Array --> Concatenated Strings
3. Number, boolean, NULL --> String
4. Undefined, Functions, Symbole --> Omitted or NULL
*/
let str = JSON.stringify(person);
console.log(str);
let arr2 = [1,'ABC', 'abc', 'DEF', 'def', 'GHI', 'ghi', 2 ,3, 4, 6];
console.log(JSON.stringify(arr2));
