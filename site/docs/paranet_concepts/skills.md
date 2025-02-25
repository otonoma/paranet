---
id: skills
title: Skill Definitions and Matching
sidebar_position: 5
---

# Skill Definitions and Matching

**Skills** in the Paranet represent capabilities that actors can offer or request. They are defined by a subject and action pair and are central to autonomous collaboration.

## Skill Structure

- **Subject and Action**: Unique identifiers for the skill's purpose, ensuring distinct matching.
- **Input/Output Models**: Defined using ParanetSchema for data compatibility and verification.
- **Constraints and Labels**: Parameters for precise actor matching, based on data or actor properties.

## Skill Matching

The Paranet Broker's skill matcher:

- Receives PnCP requests for skills, identifying required subject and action.
- Validates requests against skill definitions and constraints.
- Uses strategies like BEST, FIRST, or STRICT to select the most appropriate actor, with extensible custom logic.
- Routes messages to selected actors for execution.

This dynamic matching enables the Paranet to adapt to changing conditions and actor availability, facilitating autonomous task allocation and enhancing network flexibility.