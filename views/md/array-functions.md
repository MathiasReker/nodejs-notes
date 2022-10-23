### Iterate

It is better to use map, reduce and filter if we need a new state of the object.

Foreach is used if we just want to read the data.

### Foreach

Foreach takes a callback function and run that callback function on each element of array one by one.

```javascript
const sample = [1, 2, 3];

sample.forEach((elem, index) => `${elem} comes at ${index}`)

/*
 1 comes at 0
 2 comes at 1
 3 comes at 2
 */
```

For every element on the array we are calling a callback which gets element and its index provided by foreach.

### Filter

Filter provides a callback for every element and returns a filtered array.

The main difference between forEach and filter is that forEach just loop over the array and executes the callback but
filter executes the callback and check its return value. If the value is true element remains in the resulting array but
if the return value is false the element will be removed for the resulting array.

```javascript
const sample = [1, 2, 3];

const result = sample.filter(elem => elem !== 2);

// output: [1, 3]
```

### Map

Map like filter and foreach takes a callback and run it against every element on the array but what's makes it unique is
it generate a new array based on our existing array.

```javascript
const sample = [1, 2, 3];

const mapped = sample.map(elem => elem * 10)

// output: [10, 20, 30]
```