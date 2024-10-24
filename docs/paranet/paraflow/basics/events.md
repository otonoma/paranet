---
id: events
title: Events
sidebar_position: 2
---

# Events

The event construct defines what to do when some external event occurs, including a skill request from the Paranet. When the event is preceded by the skill annotation, it is automatically registered as a skill on the Paranet.

Events have a name, a list of inputs, and a statement body. Here is an example of a typical event definition:

```
%skill(subject=employee, action=onboard)
event newEmployeeOnboard($employee_id string) {
  !OnboardEmployee($employee_id);
}
```
This defines an event named newEmployeeOnboard that is triggered by Paranet requests for the employee/onboard skill. The body of this event creates a new root goal named !OnboardEmployee. Once new goals are created, the Paraflow runtime begins the process of trying to fulfill the goal using rules and tasks described next.

## Event Declaration
The event declaration has a list of parameters that are expected for the event and a statement body that is executed when the event is triggered.

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