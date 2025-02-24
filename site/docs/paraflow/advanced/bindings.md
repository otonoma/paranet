---
id: bindings
title: Bindings
sidebar_position: 6
---

# Bindings

## Call Bindings

The following "call" constructs make use of call bindings to associate actuals to the callee's formals:

- Goal creation and completion (assert/fail/cancel)
- Event enablement
- Paralogue function call

Call bindings are written as a list of bindings like:
```
<formal> “->” <actual>
```
Where `formal` is the goal/event/paralogue parameter name and `actual` is any Paraflow expression.

For example:
```
@resolveAccount(email -> $email, source -> $source);
```
If the actual is simply a local variable of the same name as the formal, then the binding may be written in shorthand without the formal name and arrow. For example:
```
!startOrder(id -> $order, $batch);
```
Is the shorthand equivalent of:
```
!startOrder(id -> $order, batch -> $batch);
```
## Data Pattern Bindings

Pattern bindings are used to match data tuples of various types. They consist of constraints used to select matching tuples together with input bindings that assign elements of matching tuples to local variables.

There are many constructions that make use of pattern bindings:

- Rule/task head constraints
- `with`, `foreach`, `forall` statements
- `exists` expression (restricted to only constraints)

Pattern bindings are written as a list of constraints/bindings:
```
<bool-expression> | <name> “:” <variable>
```
Where `name` is a column (tables) or parameter name (goals), and boolean expressions reference at least one column/parameter name.

For example:
```
with oweItem(id == $id, qty > 0, sku: $sku) …
```
If the variable name is the same as the column/parameter name, then the binding may be written in shorthand without the field name and colon. For example, the statement above may have been written:
```
with oweItem(id == $id, qty > 0, $sku) …
```
## Structuring/Destructuring Bindings

Structuring/destructuring bindings are used when working with object data received (or returned) from (to) external services. These are used in the following statements:

- `let` with Paralogue function (destructuring)
- `return` (structuring)

The left-hand side of a destructuring `let` statement has the following form:
```
“{“ <destructure-binding-list> “}”
```
Where a destructure binding is:
```
<field> “:” <variable> [ “(“ <column-list> “)” ]
```
The values of fields are assigned to the given local variables. If the field is an array of objects, then a local table variable is constructed with column names in the column list. The columns are extracted from the fields by the same name of the array elements.

For example:
```
let { account: $account } = @resolveAccount(email -> $email)
```
If the variable is the same as the field, then the binding may be written in shorthand without the field name and colon. For example, the statement above may have been written:
```
let { $account } = @resolveAccount(email -> $email)
```
The right-hand side of the `return` statement has the following form:
```
“{“ <structure-binding-list> “}”
```
Where a structure binding is:
```
<field> “:” <expression>
```
For example:
```
return { id: $order_id }
```
If the expression is simply a local variable with the same name as the field, then the binding may be written in shorthand without the field name and colon.
