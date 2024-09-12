---
id: control_flow
title: Control Flow
sidebar_position: 6
---

# Control Flow

## If Statement

The `if` statement in Paraflow behaves similarly to other languages, although the syntax may be slightly different. Condition expressions do not need to be surrounded by parentheses, and boolean operators use names rather than symbols (e.g., `not`, `and`, `or`). The relational operators available in conditions include: `==`, `<>`, `<`, `<=`, `>`, `>=`.
```
<if-statement> :=
  "if" <expression> <*-stmt-block>
  { "else" "if" <expression> <*-stmt-block> }
  [ "else" <*-stmt-block> }
```
Note that the `if` statement may appear in events, rules, and tasks, which each have specific allowed statements, so `*-stmt-block` corresponds to the appropriate block for the context in which the `if` appears (i.e., `event-stmt-block`, `rule-stmt-block`, or `task-stmt-block`).

## Return Statement

Events, tasks, and functions may all include a `return` statement that ends execution of the body and returns data.

The `return` statement may return scalar values as in:
```
return 10;
```
Or
```
return $sum;
```
It may also return objects as in:
```
return { count: $n, $sum };
```
Objects provide a list of fields and their values. If a variable appears without a field name (like `$sum` in the example), it is shorthand for a field by the same name as the variable (i.e., `sum: $sum` in the example).

## Goal Updates

The state of a goal may be updated in event and task bodies via the following statements:
```
<update-goal-statement> :=
  "assert"  <identifier> <call-bindings> ";" |
  "cancel"  <identifier> <call-bindings> ";" |
  "fail"  <identifier> <call-bindings> ";"
```
The given name and call bindings must match exactly one goal, or a runtime exception will occur. The state of the matched goal is updated as follows:
```
- `assert`: Changes goal state to complete
- `cancel`: Changes goal state to canceled
- `fail`: Changes goal state to failed
```
A common use for the goal update statements is when a goal represents an external activity, and its outcome is reported back to Paraflow by an external service using an event.
