# Welcome to the Paranet

The Paranet is a secure skills network for intelligent machine collaboration. It utilizes the existing IP infrastructure and, for all intents and purposes, it's another internet. The Paranet is fundamentally designed for work productivity, and we consider it to be the Internet of Work (IoW). It optimizes human-to-machine and machine-to-machine collaboration.

# How to use this repository

This repository is designed to help you get started developing with our technology and tools. We've included:
- Documentation: Access it at /docs/paranet or at docs.paranet.ai
- A tutorial on how to get started
- Feel free to open an issue
- Public roadmap (...coming soon)

## Quick Links

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Operational Resource Agents (ORAs)](#operational-resource-agents-oras)
- [Learning Resources](#learning-resources)
- [Troubleshooting](#troubleshooting)
- [Glossary](#glossary)

## Prerequisites

### External Tools

Ensure you have the following tools installed:

- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

### VSCode Extensions

Install the following VSCode extensions:

- Paranet
   - > **Note**: Download the latest VSIX file within this repo's releases section.
     > # TODO - Add latest extension to this release
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Experimental - WebAssembly Execution Engine](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wasm-wasi-core)
   - > **Note**: You must manually install the `ms-vscode.wasm-wasi-core` extension because our extension cannot be recognized as a pre-release by VSCode.


## Getting Started: Setting up your local developer environment

### Step 1: Initial Setup

1. **Open VSCode**.
2. **Download the Paradocs extension** provided by Grokit.
3. **Install the Paradocs extension**:
   - Go to the **Extensions** menu in VSCode.
   - Click the menu icon (three dots) in the top-right corner of the Extensions panel.
   - Select **"Install from VSIX..."**.
   - Choose the downloaded `Paradocs` VSIX file.

### Step 2: Environment Setup

The Paradocs extension simplifies viewing, editing, and deploying resources on the Paranet.

#### Docker Authentication

To deploy our Docker images, you need to authenticate with Docker:

1. **Make sure you have Docker installed**:
   - Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. **Verify Installations**:
   - Once installed, checkmarks and version numbers should appear next to their names in the Paradocs extension interface.
   - # TODO - Add image
3. Log into Github's docker registry within the Docker extension
   - CLI command? 
5. **Login to Docker**:
   - # TODO - Remove login Button from extension, Remove this section

#### Docker Applications

Deploy local test applications to simulate actors:

1. **Deploy Testdrive Paranet**:
   - Deploy the `testdrive` to simulate a local Paranet instance.
2. **Deploy Paracord Website**:
   - Deploy the local Paracord website to serve as the frontend.
3. **Monitor Application Status**:
   - The status of these applications is displayed next to each app in the interface.
   - If the apps are running, no further action is needed.
4. **Redeploy Applications**:
   - Click the **Redeploy** button to start a new deployment.
5. **Open Paracord**:
   - Click the **Open Paracord** button to access it via your browser.

## Operational Resource Agents (ORAs)

To interact with an ORA, open a folder containing an `ora.yaml` file at its root.
# TODO -  Clean this up, more descriptive with context 

### Opening an ORA

1. **Open an ORA Folder**:
   - In VSCode, open a folder with an `ora.yaml` file at its root.
   - Example folders include `hello_world` or `ping` within this repository.
2. **View ORA in Paradocs**:
   - A new tree named after the ORA will appear in the Paradocs extension.
   - Click the ORA name to open the corresponding `ora.yaml` file.
3. **Interact with Paraflow Actors**:
   - Expand the ORA tree to list each Paraflow actor defined in the `ora.yaml`.
   - Click an actor to open its respective Paraflow file.

### Commands

- **Redeploy Paraflow Runner**:
  - View the runner's state by expanding the actor node.
  - If the runner is active, use the **Reload Paraflow** button to load the current Paraflow file.
- **Interact via Paracord**:
  - Use Paracord to interact with the actor and observe code changes.

Congratulations! You're now ready to start developing locally on the Paranet.


## Troubleshooting


### Docker Recognition Issues

If Paradocs doesn't recognize Docker:

- Ensure Docker is installed in the default location, typically `/usr/local/bin/docker`.

## Glossary

- **The Paranet**: A secure, smart network where humans and machines collaborate to perform work.
- **Paraflow**: A custom-built workflow language, foundational to the Paranet.
- **Paracord**: A client enterprise tool for interacting with local and cloud-based Paranodes.
