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
