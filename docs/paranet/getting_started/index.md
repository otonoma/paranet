---
id: getting_started
title: Getting Started
sidebar_position: 2
---

# Getting Started

Welcome to the **Getting Started** guide for the Paranet! This guide will walk you through the setup process, introduce you to the tools you’ll need, and help you deploy your first Paranet.

## Overview

The Paranet is a secure, distributed network for intelligent collaboration between humans and machines. Whether you’re deploying locally or in the cloud, this guide will help you get up and running quickly.

In this guide, you’ll learn to:
- Install the **Paranet CLI** and set up your development environment.
- Deploy your first Paranet with the **Hello World Project**.
- Debug workflows and interact with your Paranet using **Paracord**.

For detailed guides, visit [docs.paranet.ai](https://docs.paranet.ai).

---

## Prerequisites

Before you begin, ensure you have the following installed:
- **Git**: [Download](https://git-scm.com/downloads)
- **Docker**: [Download](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Download](https://docs.docker.com/compose/)
- **VS Code**: [Download](https://code.visualstudio.com/)

---

## Step 1: Install the Paranet CLI

The Paranet CLI simplifies development by managing deployments, actors, and workflows.

### Install Instructions

Run the following command to install the CLI:
```
curl -fsSL "https://pn-update.s3.us-west-2.amazonaws.com/pn-install" | sh
```
What this does:

- Creates a $HOME/.pn folder for CLI storage.
- Adds $HOME/.pn to your system’s PATH. You may need to refresh your terminal or manually add:

```export PATH="$HOME/.pn:$PATH"```

- Authenticates with GitHub to access the Docker registry and download CLI dependencies.
- Verify the installation: ```pn --version```

## Step 2: Install Required VS Code Extensions
To streamline your development workflow, install the following VS Code extensions:

1. Paranet Extension:

- Download the .vsix file from the Releases section.
- In VS Code:
  - Navigate to the Extensions view.
  - Click ... → Install from VSIX.
  - Select the downloaded file.
2. Docker Extension: Install from Marketplace
3. WebAssembly Extension (if in preview): Install manually if required.

## Step 3: Create a Project

We recommending starting with the Hello World Project to understand basic Paranet functionality.

### TODO - Instructions
1. Create Hello World
2. Create blank project

## Deploy the Paranet Locally
1. Navigate to the project folder: ```cd create-paranet```

2. Deploy your Paranet: ```pn start```

3. Verify it’s running by checking:
- Green indicators in Docker.
- Paranet nodes in Paracord (see below).

## Step 4: Use Paracord for Debugging

Paracord is a visual client for interacting with your Paranet nodes. It provides tools to:
- View conversation-based goal trees.
- Ping actors and test workflows.
- Add custom UI panels (React or Adaptive Cards).


## Troubleshooting

### Common Issues

1. Docker not recognized:
- Ensure Docker is installed in the default location (/usr/local/bin/docker).
2. CLI not found:
- Verify $HOME/.pn is added to your PATH: ```export PATH="$HOME/.pn:$PATH"```

3. GitHub authentication failed:

- Run: ```gh auth login -s read:packages -w --git-protocol https```
