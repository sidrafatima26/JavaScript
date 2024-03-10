//Polyfill of forEach array method

Array.prototype.myforEach = function (cb){
  for(let i=0; i< this.length; i++){
     cb(this[i], i, this)
  }
  return this
}

//Log the elements
let arr3= [1,2,3,4,5,6,7,8,9]
arr3.myforEach( (item)=> console.log(item) )

//Pushing into empty array and logging
let arr2 = []
arr3.myforEach( (item) => arr2.push(item) )
console.log(arr2)


//Keeping all the corner cases in mind
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    if (this == null) {
      throw new TypeError('Array.prototype.forEach called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    var array = Object(this);
    var length = array.length >>> 0;
    var i;

    for (i = 0; i < length; i++) {
      if (i in array) {
        callback.call(thisArg, array[i], i, array);
      }
    }
  };
}
