---
id: security
title: Security
sidebar_position: 11
---

# Security

Security in the Paranet is governed by **Negative Trust Security (NTS)**, which assumes no inherent trust and continuously verifies behavior.

## Core Principles

- **Zero Trust**: Continuous verification of actors, requiring ongoing proof of trustworthiness.
- **Proactive Threat Detection**: Behavioral analysis and anomaly detection for identifying potential threats.
- **Dynamic Isolation**: Immediate response to suspicious activities by isolating or removing actors.

## Implementation

- **Certificate Authorities**: Each node has its own CA for issuing and managing actor certificates, ensuring authentication and integrity.
- **Signed Communications**: All messages are signed, verifying authenticity and preventing tampering.
- **Security Actors**: Specialized actors monitor the network, using rules to detect anomalies and enforce security.
- **Route Filtering**: Ensures skill requests are routed only to authorized actors, reducing attack surfaces.
- **Skill Validation**: Validates actor capabilities before skill offers, preventing false advertising.

NTS provides a robust security framework essential for autonomous networks, enhancing resilience and scalability by continuously challenging trust and isolating threats.