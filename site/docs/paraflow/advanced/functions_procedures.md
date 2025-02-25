---
id: functions-procedures
title: Functions and Procedures
sidebar_position: 2
---

# Functions and Procedures

Procedures and functions may be defined in order to reuse code in multiple events, rules, or tasks. Parameters are defined with types in the same way as event parameters.
```
<function> :=
  "procedure" <identifier> <parameter-list> <statement-block> |
  "function" <identifier> <parameter-list> <statement-block> |
  "pure" "function" <identifier> <parameter-list> <statement-block>
```
A procedure must not return a value. Functions and pure functions must return a value. Pure functions must not access any external data, i.e., the return value from a pure function for a given set of input values is always the same.
