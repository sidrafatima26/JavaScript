//Infinite sum problem
//Implement this function sum(9)(8)(7)(6)()

function sum(a){
  return function(b){
    if(!b)
      return a
    else
      return sum(a+b)
  }
}
console.log(sum(10)(20)(30)(40)())



//If the args were finite
function sum1(a){
  return function(b){
    return function(c){
      return a+b+c
    }
  }
}

console.log(sum1(1)(2)(3))


