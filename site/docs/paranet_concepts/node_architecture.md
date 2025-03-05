---
id: node-architecture
title: Paranet Node Architecture
sidebar_position: 2
---

# Paranet Node Architecture

A **Paranet node** (or Paranode) is the fundamental building block of the Paranet, hosting actors and facilitating their autonomous interactions. Each node consists of several key components that enable distributed intelligence and autonomy.

![Node architecture](/img/node_arc.png)

## Components of a Paranet Node

- **Paranet Broker**: Manages connections, brokers messages between actors, and handles skill matching.
- **Paranet Data Service**: Provides querying capabilities for transaction ledgers, actor definitions, and source code via GraphQL APIs.
- **System Actors**: Hidden actors that perform essential functions like security and certificate management.
- **Paraflow Runtime**: Executes Paraflow actors, managing their state and interactions.

## Paranet Broker

The Paranet Broker is central to node functionality and includes:

- **PnCP Protocol**: Facilitates actor communication through request-response and other message types, supporting dynamic skill interactions.
- **GRPC Service**: Handles HTTP/2-based messaging for efficient, bidirectional streaming.
- **Skill Matcher**: Matches skill requests to capable actors using strategies like BEST, FIRST, or STRICT.
- **Transaction Ledger**: Records all PnCP messages for auditing, learning, and historical analysis.
- **Observation Engine**: Allows actors to observe messages for monitoring and learning, with continuous observer support.
- **PDNS Client**: Interfaces with the Paranet Domain Name Service for name resolution and routing.
- **Affiliation Service**: Manages node relationships for cross-node interactions, respecting organizational rules.

Each component ensures that the node can support autonomous operations effectively, providing a robust foundation for the Paranet. Nodes run as containers, leveraging Kubernetes or Linux for deployment, and are coded in Rust for memory safety.