---
id: goals
title: Goals
sidebar_position: 1
---

# Goals

A Paraflow goal represents a desired activity to perform. The activity may be parameterized by data. A goal instance consists of a name and zero or more specific parameter values. Here is an example goal:

```
!SendMessage(template -> 5039883, recipient -> “joe@gmail.com”)
```

Goal names are always preceded by the ! symbol.

Each goal instance has a state which typically progresses from Planned, to Active, to Complete. Once a goal instance has reached the Complete state, that goal is considered to be achieved; any subsequent requests to perform the same goal will not result in any further action because it has already been achieved.

**Goals to be achieved are created in two ways:**
- Event handlers may create new goals
- Rules describe how to decompose an existing goal into subgoals

### Goal Pattern

The goal pattern describes:

- The goals to which it can be applied,
- Zero or more constraint conditions, and
- The data context captured for use in the rule body

Goal patterns have the form:
```
<goal-pattern> := <goal-term> { "," <goal-term> | <data-term> }
<goal-term> :=
    <goal> "(" <pattern-binding> {"," <pattern-binding>} ")"
<data-term> :=
    <table-name> "(" <pattern-binding> {"," <pattern-binding>} ")"
```
For example,
```
!processOrder($id), order(id == $id, agent == "ext", $email)
```
This head matches `!processOrder` goals if there exists a row in the order table where the `id` column is equal to the goal’s `$id` parameter and the `agent` column is equal to "ext". Further, it captures the value of the `email` column of that row in a local variable `$email` that can be used within the rule body.

The pattern binding syntax is described in detail in the Binding section.

