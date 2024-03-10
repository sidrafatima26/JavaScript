//reduce(accumulator, curr, arr)

Array.prototype.myReduce = function (cb, initialValue){
  let acc = initialValue
  for(i=0;i<this.length;i++){
    acc = acc ? cb(this[i], i, this) : this[i]; 
  }
  return acc;
}

let arr = [1,2,3,4,5]
let output = arr.reduce( (acc, curr) => acc+curr , 0)
console.log(output)
