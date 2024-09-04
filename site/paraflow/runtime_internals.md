---
id: runtime_internals
title: Runtime Internals
sidebar_position: 9
---

# Runtime Internals

## Planner

### Intent States

![internal state](/img/internal_state.png)


- **pending**: The planner has determined to execute this intent, but it may have sequence dependencies on other intents that are not yet complete.
- **ready**: All sequence dependencies are satisfied, and the intent is ready to execute when resources are available.
- **active**: Currently executing, which means:
  - For rules: waiting for sub-intents.
  - For tasks: executing the task body.
- **complete**: Successfully completed.
- **failed**: Abandoned due to failure of the task or 1+ sub-intents in the case of rules.

## Execution

Certain goals are designated as top-level goals. An instance of an agent corresponds to exactly one top-level goal instance. Each agent (i.e., top-level goal) instance is independent of any other instance and is planned and executed in a single logical container. The entire instance state is persistent, and the actual execution will be performed by one or more running processes on one or more machines over time, but never more than one process or machine at the same time.

## Planning/Execution Algorithm

Rules support concurrent sub-tasks, so this is similar to HTN (Hierarchical Task Network) algorithms for partially-ordered tasks.

1. An outside event triggers the creation of a new top-level goal.
2. Depth-first planning is performed.
3. Initialize planning state with the current state of static relations.
4. Non-deterministically select an unplanned goal.
5. If the goal is primitive, then:
   - Determine eligible and potential tasks.
   - If no eligible tasks:
     - If at least one potential task exists, return to step 5, otherwise fail.
   - Calculate costs associated with eligible tasks.
   - Non-deterministically select one eligible task with minimal cost.
   - Apply static behavior to the planning state.
   - Add the selected task to the plan.
   - Transfer goal sequence constraints to the selected task.
6. If the goal is not primitive, then:
   - Determine eligible and potential rules.
   - If no eligible rules:
     - If at least one potential rule exists, return to step 5, otherwise fail.
   - Calculate costs associated with eligible rules.
   - Non-deterministically select one eligible rule with minimal cost.
   - Execute the rule with the planning state and collect resulting sub-goals with their sequence constraints.
   - Recursively plan sub-goals.
   - If sub-goals fail to plan, remove them from eligible rules and return to step 6.
   - Add sub-goals and their sequence constraints to the plan.
   - Transfer goal sequence constraints to each of the added sub-goals that are initial within the added sub-goals.
7. While there remain unplanned goals, return to step 4.
8. Create an intent in the pending state for each task in the plan.
9. Execute intents.
10. While there remain unfulfilled goals, return to step 5.

## Definitions

- **Eligible rule (or task)**: A rule (or task) is eligible with respect to a goal for planning if:
  1. It does not have a precondition that depends on a dynamic relation, or all the target goal’s support goals have been achieved.
  2. Any preconditions are true.

- **Potential rule (or task)**: A rule (or task) is potential with respect to a goal for planning if its precondition depends on a dynamic relation and at least one of the target goal’s support goals is not complete.

- **Support goal**: Goal A is a support for goal B if there is a sequence constraint that A precedes B.
