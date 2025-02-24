
# Tasks

The task construct defines how to perform a goal. This may be to take some action internally, or it could be to delegate the work to another actor via the Paranet.

Just like rules, a task has a goal pattern and statement body. Here is an example of a task defined following our running example of employee onboarding:

```
task !DoCorporateTraining($employee_id) {
  let $template = Env("CORPORATE_TRAINING_TEMP");
  pncp request employee/send_message($employee_id, $template);
}
```
This is an example where the task is simply delegated to another actor via the Paranet.

### Paraflow Task

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

### PNCP Task

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