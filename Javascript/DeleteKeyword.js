//In JavaScript, the delete keyword is used to remove a property from an object or an element from an array. Its behavior depends on whether the target is an object property or an array element:

//Delete keyword in array deletes the element leaving undefined holes in the array and array length will be the same

let arr1 = [1,2,3,4,5,6,7,8,9,10]
delete arr1[3]
console.log(typeof(arr1[3]))
console.log(arr1)

//Delete Keyword in Objects will delete the targeted key value pair and works even for functions

let obj1 = {
  a:1,
  b:2,
  c:3,
  d:4,
  e: function(){
  return this.b
  },
  f: ()=> {return this.a}
}

delete obj1.a;
console.log(obj1)
delete obj1.e
console.log(obj1)

//Function arguments can not be deleted as delete is not allowed on function arguments

const func = (function (a){
  delete a
  return a
})(70);
console.log(func)

//Variables can not be deleted as delete is not allowed in case of variables
var a = "This is a "
delete a;
console.log(a)

//Functions can not be deleted as delete is not allowed iin case of functions
function A(){
  console.log("You are inside function A")
}
delete A
A();
