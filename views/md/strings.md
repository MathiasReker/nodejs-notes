### Different ways to concat strings:

The plus operator can concatenate strings:

```javascript
const firstName = "Mathias";
const lastName = "Reker";
const message = "My first name is " + firstName + " and my last name is " + lastName;
 ```

Strings can be concatenated using template variables:

```javascript
const firstName = "Mathias";
const lastName = "Reker";
const message = `My first name is ${firstName} and my last name is ${lastName}`;
 ```

The `console.log()` takes a list of arguments and concatenates them. This is nice as it is displayed with different
colors in
the terminal according to the datatype.

```javascript
const firstName = "Mathias";
const lastName = "Reker";
console.log("My first name is", firstName, "and my last name is", lastName);
```

We can use the `+` operator in front of a string to typecast it to a number. Alternative ways are `parseInt()`
and `Number()`.

### Template literals

We can write javascript inside `${}` when using template literals.

### Escaping

When using strings, we can wrap them in single quotes `''` or double quotes `""`. If we use double quotes inside double
quotes, we will have to escape them with a backslash. The same goes for single quotes with single quotes inside.
