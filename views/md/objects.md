In JavaScript, almost everything is an object. But these objects are a bit different from what we see in Java. An object
in javascript is simply a hashmap with key-value pairs. A key is always a string or a
symbol; a value can be anything, including strings, numbers, booleans, functions, other objects, etc. So we can create
a new object like this:

```javascript
const obj = {};
```

And add new key-value pairs into it:

```javascript
obj['message'] = 'Hello';
```

or

```javascript
obj.message = 'Hello';
```

Similarly, if we want to add a new function to this object:

```javascript
obj['showMessage'] = function () {
    alert(this['message']);
}
```

or

```javascript
obj.showMessage = function () {
    alert(this.message);
}
```

Now, if we call this function, it will show a pop-up with a message:

```javascript
obj.showMessage();
```

Arrays are simply those objects which are capable of containing lists of values:

```javascript
const arr = [32, 33, 34, 35];
```

Although we can always use any object to store values, arrays allow us to store them without associating a key
with each of them. So we can access an item using its index:

```javascript
alert(arr[1]); // This would show 33
```

An array object, just like any other object in javascript, has its properties, such as:

```javascript
alert(arr.length); // This would show 4
```
