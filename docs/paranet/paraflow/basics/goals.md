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


Both of these are described next:

## Events

The event construct defines what to do when some external event occurs. 

More on events here.

The event construct defines what to do when some external event occurs, including a skill request from the Paranet. When the event is preceded by the skill annotation, it is automatically registered as a skill on the Paranet.

Events have a name, a list of inputs, and a statement body. Here is an example of a typical event definition:

```
%skill(subject=employee, action=onboard)
event newEmployeeOnboard($employee_id string) {
  !OnboardEmployee($employee_id);
}
```
This defines an event named newEmployeeOnboard that is triggered by Paranet requests for the employee/onboard skill. The body of this event creates a new root goal named !OnboardEmployee. Once new goals are created, the Paraflow runtime begins the process of trying to fulfill the goal using rules and tasks described next.

**Goal Planning - Rules**

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

**Achieving Goals - Tasks**

The task construct defines how to perform a goal. This may be to take some action internally, or it could be to delegate the work to another actor via the Paranet. Just like rules, a task has a goal pattern and statement body. Here is an example of a task defined following our running example of employee onboarding:


```
task !DoCorporateTraining($employee_id) {
  let $template = Env("CORPORATE_TRAINING_TEMP");
  pncp request employee/send_message($employee_id, $template);
}
```
This is an example where the task is simply delegated to another actor via the Paranet.

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

