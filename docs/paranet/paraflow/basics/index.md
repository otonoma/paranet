---
id: basics
title: Basics
sidebar_position: 1
---

# Language Basics

### Program Execution

Decidedly different from most programming languages, Paraflow is a goal-driven language. Its execution consists of an interleaved sequence of the following activities:

- **Executing event handlers**: Instructions to handle external events.
- **Planning goals**: Creating a plan to achieve desired goals.
- **Executing planned tasks**: Instructions that accomplish an atomic goal.

This sequence of activities may take place over milliseconds, hours, days, or even years. As such, there may not be a single instance of running code in memory or an OS process that performs all the activities of a single execution.

A Paraflow instance is the execution sequence associated with a single root goal (i.e., a top-level goal that is not a sub-goal of any other goal). Root goals are created within an event handler and thus these event handlers can be considered the entry point.


### Goals

A Paraflow goal represents a desired activity to perform.  The activity may be parameterized by data.  A goal instance consists of a name and zero or more specific parameter values.

Goal names are always preceded by the ! symbol.

More on goals here.


**Goals to be achieved are created in two ways:**
- Event handlers may create new goals
- Rules describe how to decompose an existing goal into subgoals


Both of these are described next:

### Events

The event construct defines what to do when some external event occurs. 

More on events here.

### Rules (goal planning)


The task and rule constructs of Paraflow are used to provide "recipes" for how to achieve goals that match a particular pattern. In the case of rules, they define how to decompose a high-level goal into sub-goals and any sequencing dependencies.

More on rules here.

### Tasks (achieving goals)


The task construct defines how to perform a goal. This may be to take some action internally, or it could be to delegate the work to another actor via the Paranet.

More on tasks here.

### Comments
Single-line comments begin with the `#` symbol and may appear anywhere where whitespace is acceptable. For example:

```
# This is my main task
!go($uid) {
  with item_detail(id == $uid) { % always exactly one row
  }
}
```
### Variables
Local variables may be used in any statement block, including the body of events, rules, and tasks. Variable declarations begin with the keyword let followed by the variable name, which must begin with the $ symbol, an initial value, and a terminating semicolon. For example:


```
let $y = 5 * $x;
```
### Literals

The following types of fixed values may be used:

- **Strings:** These must be enclosed in double quotes: "Hello"
- **Whole numbers:** A sequence of digits: 594
- **Decimal numbers:** A sequence of digits, decimal point, and second sequence of digits: 2.39
- **Time duration:** A sequence of digits followed by a unit (ms, sec, min, hr, hour, hours, day, days): 1 min

