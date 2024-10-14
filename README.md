# Welcome to the Paranet

**The Internet of Work**

**The Paranet** is a secure, distributed network designed for intelligent machine and human collaboration. Leveraging existing IP infrastructure, The Paranet creates a new layer of the internet optimized for productivity and efficient interaction between humans and machines.

The Paranet is built around core components:

- **The Paranet Network:** An overlay network that supports a new protocol to enable collaboration between actors, digital and human. 
- **Paranet Engine:** The underlying technology that powers actor execution and communication to the network for each individual paranet.
- **Paraflow:** A distributed general workflow actor language. It is a DSL (Domain Specific Language) for workflow on a network.
- **Paracord:** A React-based client application providing a visual interface to interact with deployed nodes on Paranet.

## How to use this repository

This repository is your starting point to begin developing with Paranet. It includes everything you need to get up and running quickly.
- **Documentation:** Detailed guides and references are available a [docs.paranet.ai](https://docs.paranet.ai)
- **Getting Started Tutorial:** Find it below
- **Issues:** Open an issue here within the repo
- **Project Examples:** Find different paranet examples within the examples folder
- **Public roadmap:** (...coming soon)

## Getting Started

### Tool Prerequisites

Ensure you have the following tools installed:

- **Git:** [Download](https://git-scm.com/downloads)
- **Docker:** [Download](https://www.docker.com/products/docker-desktop)
- **Docker Compose:** [Download](https://docs.docker.com/compose/install/)
- **VSCode:** [Download](https://code.visualstudio.com/)

#### Required VSCode Extensions

Install the following extensions in VScode:

- **Paranet Extension**: [Releases](https://github.com/grokit-data/paranet/releases)
   - > **Note**: This extension is not available on the VSCode Marketplace. You'll need to install it manually from a .vsix file. You'll find this in the releases section of this repo.
- **Docker Extension:** [Install](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- **WebAssembly Execution Engine:** [Install](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wasm-wasi-core)
   - > **Note**: This extension may need to be manually installed if it's in preview.

### Installation

**Step 1: Install the Paranet VSCode Extension**

**1. Download the Latest Paranet Extension**
- Go to the [Releases](https://github.com/grokit-data/paranet/releases) section of this repository.
- Download the latest ParanetExtension.vsix file.

**2. Install the Extension in VSCode**

<img width="640" alt="Screenshot 2024-10-14 at 2 37 54 PM" src="https://github.com/user-attachments/assets/0f4c757c-79ed-4a07-9294-3381f4df9d80">

- Open VSCode.
- Navigate to the Extensions view (click on the square icon on the sidebar).
- Click on the ... (More Actions) button in the top-right corner of the Extensions pane.
- Select "Install from VSIX...".
- Browse to the downloaded ParanetExtension.vsix file and select it.

_**Reminder:**_ Also install Docker and Web Assembly extensions before moving to the next step.

**Step 2: Clone the create-paranet repository**

To quickly get started, clone our create-paranet project to your machine:

- **HTTPS**
```git clone https://github.com/grokit-data/create-paranet.git```

- **SSH**
```git clone git@github.com:grokit-data/create-paranet.git```

- Alternatively, download the repository as a ZIP file and extract it.

**Step 3: Open the create-paranet project in VSCode**
- Open VSCode.
- Go to File > Open Folder.
- Select the cloned create-paranet project folder.

**Step 4: The Paranet Extension**
Our extension simplifies viewing, editing, and deploying resources on the Paranet.
- #TODO - Add Image

**1. Environment Check**
- Verify Docker Installation
- Authorize with Github
   - Log into Github's docker registry with this command, replacing username and token with your Github username + Oauth token

**2. Running Your Paranet**
- # TODO - deploy docker container or create paranet button or command line?

**3. Running Your Actors**
- # TODO - deploy actors or single button?

**4. Verify your paranet is running**
- Green dots
- Docker extension
- Paracord deployed list

**Step 5: Using Paracord**

Paracord is the client application for interacting with your Paranet nodes.
- # TODO: Launch Paracord locally or hosted?
- # TODO: Connect to a Paranet
- # TODO: ORA
- # TODO: Interacting with your Actors
- # TODO: View or documentation for more extensive information

## Learning Resources
- **Documentation:** Detailed guides and references are available a [docs.paranet.ai](https://docs.paranet.ai)
- **Project Examples:** Examples folder within this repository

# TODO -  Clean this up, more descriptive with context
### Operational Resource Agents (ORAs)

To interact with an ORA, open a folder containing an `ora.yaml` file at its root.

#### Opening an ORA

1. **Open an ORA Folder**:
   - In VSCode, open a folder with an `ora.yaml` file at its root.
   - Example folders include `hello_world` or `ping` within this repository.
2. **View ORA in the Paranet Extension**:
   - A new tree named after the ORA will appear in the Paranet extension.
   - Click the ORA name to open the corresponding `ora.yaml` file.
3. **Interact with Paraflow Actors**:
   - Expand the ORA tree to list each Paraflow actor defined in the `ora.yaml`.
   - Click an actor to open its respective Paraflow file.

# TODO -  Clean this up, more descriptive with context
#### Commands

- **Redeploy Paraflow Runner**:
  - View the runner's state by expanding the actor node.
  - If the runner is active, use the **Reload Paraflow** button to load the current Paraflow file.
- **Interact via Paracord**:
  - Use Paracord to interact with the actor and observe code changes.


## Troubleshooting

### Docker isn't being recognized

Ensure Docker is installed in the default location, typically `/usr/local/bin/docker`.

