//This polyfill checks if the bind method is missing in the Function.prototype object, and if it is, it adds a custom implementation. 
//The bind function creates a new function that, when called, has its this keyword set to the provided value, 
//with a given sequence of arguments preceding any provided when the new function is called.



if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    var fn = this;
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
      var boundArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(context, boundArgs);
    };
  };
}
