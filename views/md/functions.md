### Callback functions

Javascript is asynchronous. Therefore, it is possible to execute code simultaneously. When using a callback function,
a promise is invoked, and firstly when the function is done, either returning with an error or the result, the promise
is resolved.
Therefore, a callback function is a reference to code given as an argument to another function which executes
only when the promise of the callback function is resolved.

### Anonymous functions

When using arrow functions, `this` is bound to the function's scope. Anonymous functions refers to the scope of
the class.
