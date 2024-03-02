// Polyfill for Promise
if (!window.Promise) {
  window.Promise = function(executor) {
    // Possible states of a Promise
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    // Initial state of the Promise
    let state = PENDING;
    let value = null;
    let handlers = [];

    // Function to resolve the Promise with a value
    function resolve(result) {
      if (state === PENDING) {
        state = FULFILLED;
        value = result;
        handlers.forEach(handle);
        handlers = [];
      }
    }

    // Function to reject the Promise with a reason
    function reject(reason) {
      if (state === PENDING) {
        state = REJECTED;
        value = reason;
        handlers.forEach(handle);
        handlers = [];
      }
    }

    // Function to handle the fulfillment or rejection of the Promise
    function handle(handler) {
      if (state === FULFILLED) {
        handler.onFulfilled(value);
      } else if (state === REJECTED) {
        handler.onRejected(value);
      }
    }

    // Function to add fulfillment and rejection handlers
    this.then = function(onFulfilled, onRejected) {
      return new Promise(function(resolve, reject) {
        handle({
          onFulfilled: function(result) {
            if (typeof onFulfilled === 'function') {
              try {
                resolve(onFulfilled(result));
              } catch (error) {
                reject(error);
              }
            } else {
              resolve(result);
            }
          },
          onRejected: function(reason) {
            if (typeof onRejected === 'function') {
              try {
                resolve(onRejected(reason));
              } catch (error) {
                reject(error);
              }
            } else {
              reject(reason);
            }
          }
        });
      });
    };

    // Execute the executor function immediately
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  };
}
