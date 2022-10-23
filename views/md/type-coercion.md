Type coercion means that when the operands of an operator are different types, one of them will be converted to an
"equivalent" value of the other operand's type. For instance, if we do the following:

`boolean == number`

The boolean operand will be converted to a `number`: `false` becomes `0`, and `true` becomes `1`. Then the two values
are compared.

However, if we use the non-converting comparison operator `===`, no such conversion occurs. When the operands are of
different types, this operator returns `false`, and only compares the values when they're of the same type.
