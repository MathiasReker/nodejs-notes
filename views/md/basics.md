### Node.Js

Node.Js is used for server-side programming and primarily deployed for non-blocking, event-driven servers, such as
traditional websites and back-end API services, but it was originally designed with real-time, push-based architectures
in mind. Every browser has its version of a javascript engine and node.

### SSR

SSR (Server Side Rendering) is better for SEO and generally better for performance.

### Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top. In JavaScript, a variable can be declared
after it has been used.

Example:

```javascript
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerText = x;                     // Display x in the element

const x; // Declare x 
```

### Spread Operator

The spread operator `...` allows an iterable, such as an array or string, to be expanded in places where zero or more
arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax
enumerates the properties of an object and adds the key-value pairs to the object being created.

### Strict comparing

`==` is comparing values. `===` is comparing values and types. It is better to use strict comparing.

### Get element

It is better to use `getElementById()` rather than `querySelector()` where it is possible as it is faster.
