---
sidebar_position: 2
---

# ParaFlow Documentation

## Introduction

**ParaFlow** is a simple language designed to build autonomous agents. These agents are goal-seeking: based on a set of goals, they plan and execute tasks that make progress towards achieving those goals. The behavior of ParaFlow agents is deterministic, transparent, and inspectable. ParaFlow agents can:

- Manage state
- Make decisions
- Perform actions
- Respond to events

ParaFlow is not a general-purpose language. Its primary purpose is to monitor, plan, and orchestrate activities. While simple data manipulation is possible in ParaFlow, more complex code should be implemented in a separate service using a general-purpose language.

## Core Concepts

### Generic

ParaFlow is designed to be generic, supporting any domain through the use of a domain definition, such as an ontology of actions. Although examples are provided from the supply chain/ecommerce domain, ParaFlow's flexibility allows it to understand various domains.

### Goal-Seeking

ParaFlow operates using the BDI (Beliefs/Desires/Intents) model:
- **Beliefs**: The agent's knowledge about the world (i.e., state).
- **Desires**: The goals the agent aims to achieve.
- **Intents**: Concrete plans to achieve the desires.

For example, a desire might be to receive 10 boxes of blue latex gloves, and the corresponding intent could be to purchase a specific item from a supplier.

### Autonomous

Agents in ParaFlow can take proactive actions to achieve their goals without human intervention. For example, they can make calculations and decide on actions based on the results.

### Adaptive

Agents adapt to failures by replanning. If an order is backordered, for example, the agent may cancel the order and attempt to purchase from another supplier.

### Hierarchical

Goals and intents can be broken down into sub-goals and sub-tasks, or combined into super tasks. For instance, an order might be broken into sub-goals for each item, which can then be combined into a single supplier order.

### Personalized

Agents act on behalf of users based on their specific preferences. Domains have known trade-offs (e.g., cost vs. delivery time) that are evaluated for each user. Preferences may be soft (e.g., a slider between cost and delivery time) or hard (e.g., a constraint like "must be received within 10 days").

### Managed Instances

Each agent instance follows a life cycle:
1. **Creation**: Initialized with a state and goals.
2. **Execution**: Continues until goals are achieved, manually aborted, or failed.
3. **Termination**: Instance ends, but is persisted and queryable.

### Persistent

Instances, whether active or terminated, are persisted and queryable for reporting. Unlike paralogue, which is stateless, ParaFlow is stateful and can be queried at any time.

### Owned

Each agent instance is owned by a user, and the agent’s desires and trade-offs are expressed from the owner’s perspective. Future securitization/authentication/authorization might be required to ensure agents legally represent users.

## ParaFlow Language

### DSL Overview

- **Tables**: Define the data representing the world state.
- **Desires**: Conditions expressed over the world state. Desires may conflict.
- **Goals/Intents**: Named actions to be performed to meet desires. Goals persist until achieved or unachievable.
- **Processes**: Encapsulate all activity around a top-level goal instance, following a life cycle from creation to success or failure.
- **Event Handlers**: Receive external events, update state, and create new goals.
- **Tasks/Plans**: Specify steps required to fulfill goals. Tasks may be synchronous (achieved immediately) or asynchronous (await external events).
- **Rules**: Used to decompose goals into sub-goals or compose multiple sub-goals into a single goal.

### Planner

Intent states are managed in a database and scheduling queues:
- **Pending**: Awaiting prerequisite tasks.
- **Ready**: All prerequisites satisfied, ready for execution.
- **Active**: Currently executing.
- **Complete**: Successfully finished.
- **Failed**: Abandoned due to task failure or unmet sub-intents.

### Sensing

ParaFlow supports dynamic modeling of the world state, alternating between static planning and execution. Rules can be executed statically at planning time, while tasks with dynamic state are deferred to execution time.

### Execution

- **Top-Level Goals**: Each agent corresponds to a single top-level goal instance.
- **Planning/Execution**: Conducted in a logical container with persistent state, executed by one or more processes.

### Planning/Execution Algorithm

- **Depth-First Planning**: Performed for each new top-level goal.
- **Concurrent Sub-Tasks**: Supported via rules.
- **Intent Creation**: Generated for each task in the plan.
- **Execution**: Continues until all goals are fulfilled.

### Definitions

- **Eligible Rule/Task**: Can be planned if no dynamic state preconditions exist, or all support goals are achieved.
- **Potential Rule/Task**: Depends on dynamic state and unachieved support goals.
- **Support Goal**: A goal that must precede another due to sequence constraints.

## ParaFlow Rules

### Rule Structure

- **Rule Head**: Describes applicable goals and constraints, capturing data context.
- **Rule Body**: Contains statements to generate sub-goals required to achieve the matched head goal.

### Bindings

- **Call Bindings**: Associate actuals with formal parameters in tasks, events, and paralogue function calls.
- **Data Pattern Bindings**: Match data tuples to local variables in rule/task head constraints.
- **Aggregations**: Extended pattern bindings in `with` statements support SQL-style aggregation functions.
- **Data Output Bindings**: Used in table modification statements like update, insert, and delete.
- **Structuring/Destructuring Bindings**: Used when working with object data from external services.

## Paraflow Language Overview

### Rules

Rules describe how to achieve a goal by decomposing it into sub-goals. Rules may depend on data but cannot change or create new data.

### Example Rules

**Simple Decision-Making Rule:**

```paraflow
rule !followAction($iid) {
  with breakdown(iid == $iid, $action) {
    if $action == "SiteWideStop" {
      !performSWS($iid);
    } else if $action == "Move" {
      !performMoveAmt($iid);
    } else {
      log error("Invalid breakdown action " + $action);
    }
  }
}

### Cost-Based Decision Making
Tasks and goals may have associated costs, which help decide which task or rule to use when multiple options are available.

### Paranet
ParaFlow actors operate within a Paranet. They can implement skills (fulfill requests) and delegate work (make requests) to achieve their goals.
