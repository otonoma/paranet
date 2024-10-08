# Welcome to the Paranet

This repository is designed to help you get started developing with our technology and tools.

### TODO - Add paragraph introduction with link to overview documentation


## Table of Contents

- [Prerequisites](#prerequisites)
  - [External Tools](#external-tools)
  - [VSCode Extensions](#vscode-extensions)
  - [Grokit Tools](#grokit-tools)
- [Getting Started](#getting-started)
  - [Step 1: Initial Setup](#step-1-initial-setup)
  - [Step 2: Environment Setup](#step-2-environment-setup)
    - [Docker Authentication](#docker-authentication)
    - [Docker Applications](#docker-applications)
- [Operational Resource Agents (ORAs)](#operational-resource-agents-oras)
  - [Opening an ORA](#opening-an-ora)
  - [Commands](#commands)
- [Learning Resources](#learning-resources)
- [Troubleshooting](#troubleshooting)
  - [AWS SSO Not Logged In](#aws-sso-not-logged-in)
  - [Docker Recognition Issues](#docker-recognition-issues)
- [Glossary](#glossary)

## Prerequisites

### External Tools

Ensure you have the following tools installed:

- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [AWS SSO Configuration](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

### VSCode Extensions

Install the following VSCode extensions:

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Experimental - WebAssembly Execution Engine](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wasm-wasi-core)

> **Note**: You must manually install the `ms-vscode.wasm-wasi-core` extension because our extension cannot be recognized as a pre-release by VSCode.

### Grokit Tools

- **Paradocs**: Our custom VSCode extension (Version 0.0.19)

## Getting Started

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

To deploy our Docker images, you need to authenticate Docker:

1. **Install AWS CLI and Docker**:
   - Download and install the [AWS CLI](https://aws.amazon.com/cli/).
   - Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. **Verify Installations**:
   - Once installed, checkmarks and version numbers should appear next to their names in the Paradocs extension interface.
3. **Login to Docker**:
   - Click the **+ Login** section in the Paradocs extension.
   - This executes the Docker login command, also accessible via the Command Palette.
   - **Select your AWS profile** used to connect to Amazon ECR.
     - For setup details, refer to the [AWS SSO Configuration Guide](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html).
   - A notification will display the progress and prompt you to complete the SSO login if necessary.

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

## Learning Resources

...coming soon!

## Troubleshooting

### AWS SSO Not Logged In

If you're having AWS SSO issues:

1. **Check AWS Profiles**:
   - Run:
     ```bash
     aws configure list-profiles
     ```
   - If no profiles are listed, create an AWS SSO user in the AWS Management Console.
2. **Log In to AWS SSO**:
   - If profiles are listed, run:
     ```bash
     aws sso login --profile [your-access-user]
     ```

### Docker Recognition Issues

If Paradocs doesn't recognize Docker:

- Ensure Docker is installed in the default location, typically `/usr/local/bin/docker`.

## Glossary

- **The Paranet**: A secure, smart network where humans and machines collaborate to perform work.
- **Paraflow**: A custom-built workflow language, foundational to the Paranet.
- **Paradocs**: A custom integrated development environment (IDE) with features designed for the Paranet.
- **Paracord**: An enterprise tool for interacting with local and cloud-based Paranodes.
