---
id: pncp
title: Paranet Collaboration Protocol
sidebar_position: 6
---

# Paranet Collaboration Protocol (PnCP)

**PnCP** is the core protocol for actor communication and collaboration in the Paranet. It supports dynamic, skill-based interactions essential for distributed autonomy.

## Message Types

- **PNCPRequest**: Initiates a skill request with subject, action, and data, alongside optional targeting parameters.
- **PNCPMessage**: Encapsulates various message types for conversation:
  - **PNCP_RESPONSE**: Terminates a conversation with a response.
  - **PNCP_STATUS**: Sends updates during a conversation.
  - **PNCP_CANCEL**: Signals premature conversation end.
  - **PNCP_ERROR**: Communicates errors.
  - **PNCP_QUESTION/ANSWER**: Facilitates sub-requests within a conversation.

## Transport and Communication

- **GRPC Implementation**: Uses GRPC over HTTP/2 for efficient, bidirectional streaming and message handling.
- **Callbacks**: Actors receive messages via PNCPCallback, with additional context for processing.
- **Cross-Paranet Interaction**: Domain actors enable skill matching across different network segments, supporting scalability.

## Extensibility and Observational Intelligence

- **Extensible Matching**: Supports custom skill matching logic, enhancing flexibility for specific applications.
- **Observational Intelligence**: Actors can subscribe to conversation streams, enabling system-wide learning and monitoring.

PnCP's design allows actors to communicate based on capabilities, fostering a flexible and adaptive autonomous network. It bridges IT-OT divides, supports subprotocols, and ensures security via NTS.