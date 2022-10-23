### let and var

Variables declared by the `var` keyword are scoped to the immediate function body while `let` variables are scoped to
the immediate enclosing block denoted by `{ }`.

```javascript
function run() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar);

    {
        var moo = "Mooo"
        let baz = "Bazz";
        console.log(moo, baz);
    }

    console.log(moo);
    console.log(baz);
}

run();
```

The reason why the `let` keyword was introduced to the language was function scope was confusing and was one of the main
sources of bugs in JavaScript.

### const

`Const` declarations share some similarities with `let` declarations, but `const` variables cannot be updated or
re-declared.
It maintains the constant values.
Unlike `var` and `let`, if we are using `const`, then it must be initialized at the same time when we declare the
variable.
