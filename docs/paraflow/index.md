---
id: introduction
title: Introduction
sidebar_position: 1
---

# ParaFlow Documentation

## Introduction

## Paraflow

**Paraflow** is a simple language designed to build autonomous agents. Paraflow agents are goal-seeking: based on a set of goals, they plan and execute tasks that make progress towards achieving those goals. The behavior of Paraflow agents is deterministic, transparent, and inspectable. 

### Paraflow agents can:
- Respond to events
- Make decisions
- Plan & perform actions
- Manage state

Paraflow is **not** a general-purpose language. Its primary purpose is to monitor, plan, and orchestrate activities. You may often do some simple data manipulation in Paraflow, but for more complex code, consider creating a separate service in a general-purpose language.

## Paranet

Paraflow actors operate within a Paranet. They can implement skills (i.e., receive and fulfill requests) and they can delegate work (i.e., make requests that help achieve their goals) to other actors on the network.
