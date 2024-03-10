//Polyfill of Filter array method
//.filter( (item, i, arr) =>  )

Array.prototype.myFilter = function (cb){
  let arr = []
  for(i=0; i< this.length; i++)
    if( cb(this[i], i, this) )
    arr.push( this[i] )
  return arr
}

let array = [1,2,3,4,5,6,7,8,9]
let op= array.myFilter( item => item > 2 )
console.log(op)
