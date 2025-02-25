---
id: rules
title: Rules
sidebar_position: 3
---

# Rules

**AKA Goal Planning**

The task and rule constructs of Paraflow are used to provide "recipes" for how to achieve goals that match a particular pattern. In the case of rules, they define how to decompose a high-level goal into sub-goals and any sequencing dependencies.

Rules have a goal pattern and statement body. The following example is what a rule might look like for the !OnboardEmployee goal described in the previous section.


```
rule !OnboardEmployee($employee_id) {
  !ProcessW2($employee_id),
  !DoCorporateTraining($employee_id);
}
```
This rule matches !OnboardEmployee goals. The $employee_id variable in the goal pattern is bound to the actual value of the matched goal and is used in the statement body to create two new sub-goals which can be performed in parallel, indicated by the separating comma. Goal statements separated by a semicolon create sub-goals that must be performed sequentially.

Goals that match rules are expanded recursively until no more rules match. The leaf goals of the expanded goal tree are the resulting actions to be performed, which are defined by tasks, described next.

### Rule Declaration

The rule declaration has a goal pattern that describes what goals the rule can be applied to and a rule body that describes how to achieve that goal in terms of subgoals.
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