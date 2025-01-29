---
id: ora
title: ORA
draft: true
sidebar_position: 5
---

# The ORA

## What's an ORA?

An Operational Reference Architecture (ORA) is a standardized framework for orchestrating business processes and collaboration.
By leveraging the power of ORAs, businesses can streamline operations, optimize resource allocation, and create a dynamic environment for human-machine interaction.
That orchestration happens through communication over the Paranet using the PNCP protocol.

## What's the ORA Designer?

It is a Paracord tool for visual orchestration of business workflows taking advantage of distributed autonomous actors.

## ORA Designer Overview

### View Modes

The ORA Designer can be in the Design or the Simulation mode.

#### Designer

The UI for designing an ORA. It includes the [Canvas](#the-canvas) and a list of the last viewed ORA files on the left side.

#### Simulator

_Coming soon_

### The Canvas

The Canvas is the drawing area of the ORA Designer, it features a mini map and controls for zooming in/out. You can add actors to your ORA by dragging them from the [Marketplace](#the-marketplace) or by [importing](#import) an YAML file and delete them (or their connections) by selecting them and pressing `Backspace`.

#### Actors

An actor is an autonomous entity that performs actions - those actions are called `skills` and appear listed in the actor's canvas element.
Actors not only provide skills but they can also request different actors or subscribe to listen for a stream of data (the observations).
Double-clicking an actor will bring up the Actor Details panel, which presents the actor's documentation and its available skills.

#### Color states

Shows by colors what's the current state of the actor

- **Blue**: the actor is active, meaning it has at least one connection (skill request or observation)
- **Gray**: the actor is inactive, meaning it has no connections
- **Red**: the actor is in an errored status. For example, it's trying to dispatch a skill request to an inexistent actor

#### Skill Requests

Skill Requests are represented by solid connections in the diagram. To make one, drag an line from the actor `request` handle to any skill request of a different actor.
By doing it, the actor dispatches a skill request to the target. All the communication between actors can be tracked in `Advanced` tab

#### Observations

Observations are represented by animated dashed connections in the diagram. To make one, drag an line from the actor `observe` handle to any skill request of a different actor.
By doing it, the actor will start to listen for any data emitted by the target of its observation.

### The Marketplace

By clicking on the round plus button, the user has access to the Marketplace, where they can list and find the available actors on the current paranet or from the public Paranet.
Depending of the actor, it might need additional data in order to work properly, so, dragging them into the diagram will present a dialog for further configuration.
For example, a weather actor may need the current user's location. That, will generate a dialog with a location picker. That configuration can be updated any time later.

### ORA Import/Export

#### Export

To support sharing, an ORA can be exported as an YAML file. All the information, including zoom level and actor connections, will be written to a `.yml` file.
It can be shared with different ORA developers for further collaboration

#### Import

Importing a valid ORA YAML file will load its content into the canvas. _Missing actors or inconsistent connections will generate a warning in the Inbox_.
