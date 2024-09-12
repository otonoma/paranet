---
id: top-level
title: Top Level
sidebar_position: 4
---

# Top Level

## Events

Events describe what to do when some external event occurs from the environment. The event declaration has a list of parameters that are expected for the event and a statement body that is executed when the event is triggered.
```
<event> :=
  "event" [ <system-event> ] <identifier> <parameter-list>
  <event-stmt-block>
```
For example,
```
event newRequest($uid string) {
  !StartRequest($id);
}
```
## Parameters

The parameter list is a comma-separated list of parameter definitions, which include the name and type of the parameter.
```
<parameter-list> := "(" <parameter> { "," <parameter> } ")"
<parameter> := <$identifier> [ "optional" ] <parameter-type>
<parameter-type> :=
  <simple-type> |
  <table-type> |
  "json"

<simple-type> :=
  "int" |
  "double" |
  "string"
```
When an event is received, the event data is matched against the parameter list of the event declaration. It is an error if the event data does not include any parameter, or if the value is null unless the parameter is declared with the `optional` keyword.

Parameters declared as type `json` will match any scalar or object value; however, the parameter value will be assigned the string representation of that value. Where appropriate, the parameter may be used with the `ParseJson` function. See the Objects section for details.

### Table Parameters

Event parameters declared as tables will match event data represented as an array of objects.
```
<table-type> := "table" "(" <table-column> { "," <table-column> } ")"
<table-column> := <identifier> [ "optional" ] <simple-type>
```
Each element of the event data array must match the table column definitions. It is an error if any element does not include any column or if the value is null unless the column is declared with the `optional` keyword.

## Event Body

The event body consists of a list of statements.
```
<event-stmt-block> := "{" <event-statement> { <event-statement> } "}"
<event-statement> :=
  <let-statement> |
  <procedure-call> |
  <if-statement> |
  <with-statement> |
  <loop-statement> |
  <transaction-statement> |
  <update-statement> |
  <new-goal-statement> |
  <update-goal-statement> |
  <return-statement> |
  <audit-statement> |
  <log-statement>
```
## Skill Decorators

Events preceded by a skill decoration correspond to a Paranet skill provided by the Paraflow program. The descriptor defines the subject and action of the implemented skill.
```
%skill(subject=messaging, action=send)
event newSendMessage($message string, $conversation string, $requester string) {
⋮
}
```
The skill decoration does two things:

- The Paraflow code is registered as a provider of the skill on the Paranet.
- The Paraflow event is registered as the callback that is invoked whenever a new request is matched to this program.

The `conversation` and `requester` parameters are predefined and assigned the unique conversation ID and requesting actor ID of the corresponding skill request. All other event parameters are registered as inputs for the skill.

## Rules

Rules describe how a goal can be achieved by decomposition into subgoals. The rule declaration has a goal pattern that describes what goals the rule can be applied to and a rule body that describes how to achieve that goal in terms of subgoals.
```
<rule> := "rule" <goal-pattern> <rule-body>
```
For example,
```
rule !DoAthenB($id) {
  !DoA($id);
  !DoB($id);
}
```
Rules may depend on data, but cannot change or create new data. Although subgoals may have data and time-order dependencies, the rule expansion into subgoals happens at once.

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

### Rule Body

The rule body contains one or more statements that are executed to generate the subgoals that need to be achieved in order to achieve the matched head goal. The head goal is complete when all the generated subgoals are complete. If any subgoal fails, then the head goal fails.

The principal statement of the rule body is the goal statement, which consists of a single goal expression:
```
<goal-statement> := <goal-sequence> {"," <goal-sequence>} ";"
<goal-sequence> := <goal-primary> {"++" <goal-primary>}
<goal-primary> := <goal-instance> | <goal-enablement>
<goal-instance> := <goal> <call-bindings> [ "?" ] [ <after-clause> ]
```
Goals instances separated by the `,` symbol have no ordering dependencies, and the planner will seek to achieve such instances independently and concurrently. Instances separated by `++` or in separate goal statements (separated by the semicolon) have an explicit ordering dependency, and the planner will not seek to achieve any such instance until all preceding instances are complete.

For example,
```
!shipPO(id -> $po), !invoicePO(id -> $po);
```
This example creates two subgoals that have no ordering dependencies.

Other statements such as control flow and loops may also be used in rule bodies. The full list of allowed statements is:
```
<rule-stmt-block> := "{" <rule-statement> { <rule-statement> } "}"
<rule-statement> :=
  <simple-let-statement> |
  <goal-statement> |
  <if-statement> |
  <with-statement> |
  <loop-statement> |
  <log-statement>
```
## Paraflow Tasks

One of two types of tasks, the Paraflow task describes how to achieve matching goals as code. Like rules, the task declaration has a goal pattern to describe what goals it applies to. Unlike rules, the task body describes how to achieve the goal procedurally. When the planner matches a specific goal instance to a task, the task body will be executed. The goal will be considered complete once the task body has been executed.
```
<paraflow-task> : =
  "task" <goal-pattern> [ <cost-clause> ] [ "on" <expression> ] 
  <task-stmt-block>
  [ <catch-block> ]
```
Goal patterns are described in detail in the Rules section. The task body consists of a list of statements to execute.
```
<task-stmt-block> := "{" <task-statement> { <task-statement> } "}"
<task-statement> :=
  <let-statement> |
  <rpc-statement> |
  <procedure-call> |
  <pncp-statement> |
  <if-statement> |
  <with-statement> |
  <loop-statement> |
  <transaction-statement> |
  <update-statement> |
  <new-goal-statement> |
  <update-goal-statement> |
  <return-statement> |
  <retry-statement> |
  <audit-statement> |
  <log-statement>
```
## Service APIs

A Paraflow task may be used to make calls to any external service that provides a GraphQL interface. The `on` clause of the Paraflow task declaration provides the default URL of the endpoint providing the GraphQL service. The endpoint may also be overridden in individual calls to the service via the `rpc` statements.

The following example illustrates how to call a GraphQL service from Paraflow.
```
task !RegisterSeg($id) on "graphql:http://localhost:8000/graphql" {
  let { $desc, $lat, $lon } = @getSegmentDetail($id);
  insert segment($desc, $lat, $lon);
}
```
Most GraphQL requests will return data as an object, and this example demonstrates how that can be unpacked into local variables. For more detail about destructuring assignments see the Variables section.

## PNCP Task

One of two types of tasks, the PNCP task describes delegation of matching goals to the Paranet in the form of a new request.
```
<pncp-task> :=
  "task" <goal-pattern> [ <cost-clause> ] <pncp-task-body>

<pncp-task-body> :=
  [ <using-block> ] "is"
  "pncp" [ "let" <object-lhs> "=" ]
  <pncp-task-request> [ "to" <expression> ]
  <pncp-body>

<pncp-task-request> :=
  <identifier>/<identifier> [ "~" <version-spec> ] <call-bindings> |
  "ask" <identifier> <call-bindings>

<pncp-body> := "in" <statement-block> | ";"
```
### Skill Requests

The following is an example of a PNCP skill request task:
```
task !SendMessage($message, $actor) is
  pncp messaging/send($message) to $actor;
```
This task delegates `!SendMessage` goals to the Paranet. When the planner matches a goal to this task, the corresponding skill request will be made to the Paranet. The goal will be considered complete once the skill request response is received.

Here’s an example of a skill request that has a response.
```
task !FetchDeviceStatus($device_id) is
  let { $status } = pncp devices/get_status($device_id) in {
  update devices(id == $device_id, $status);
}
```
This example shows how to consume a response from a delegated task. The skill returns a status value for a given device. The left-hand side of the `let` statement describes the expected response data. When the response is received, a `$status` variable will be assigned the value from the response and the `in` statement body will be executed. In this example, the `update` statement is used to write the response to a database table.

## Procedures and Functions

Procedures and functions may be defined in order to reuse code in multiple events, rules, or tasks. Parameters are defined with types in the same way as event parameters.
```
<function> :=
  "procedure" <identifier> <parameter-list> <statement-block> |
  "function" <identifier> <parameter-list> <statement-block> |
  "pure" "function" <identifier> <parameter-list> <statement-block>
```
A procedure must not return a value. Functions and pure functions must return a value. Pure functions must not access any external data, i.e., the return value from a pure function for a given set of input values is always the same.
