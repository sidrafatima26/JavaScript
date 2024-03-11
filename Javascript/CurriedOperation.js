//Implemet this function evaluate('mul')(2)(2)

function evaluate(str){
  return function(a){
    return function(b){
  if(str === 'add')
        return a+b
  if(str === 'sub')
      return a-b
  if(str === 'mul')
    return a*b
  if(str === 'div')
      return a/b
    }
  }
}

console.log(evaluate('mul')(2)(2))
console.log(evaluate('div')(2)(2))

//One of the usecases is that you can store the mathematical operation in a variable. now whenever we call that variable it will ony perfrom that perticular operation

let multiply = evaluate('mul');
console.log(multiply(5)(6))
