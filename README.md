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

## Paranet Cli
The Paranet Cli allows for easy deployments of actors and paranets to local and cloud environments.

### Install instructions
#### Prerequisites
1. OpenSSL is needed for certificates and Cognito auth. Make sure it is on your system or install it via
- (MacOS) `brew install openssl`
- (Ubuntu) `sudo apt install libssl-dev`
- (Windows) Download from [OpenSSL](https://slproweb.com/products/Win32OpenSSL.html)
2. The github cli client `gh` is used to update the cli and authenticate docker.
- (MacOS) `brew install gh`
- (Ubuntu) `sudo apt install gh`
- (Windows) Download from [GitHub CLI](https://cli.github.com/)
#### Installer setup

To install the cli, run
```bash
  curl -fsSL "https://pn-update.s3.us-west-2.amazonaws.com/pn-install" | sh
```

This will do the following to install the cli
- A folder will be created at `$HOME/.pn` to store cli version
- The home folder `$HOME/.pn` will be added to the `PATH` by editing either `.bashrc`, `.bash_profile` or `.zshrc`. You may need to refresh your terminal to have affect. This can also be done manually by adding the line to your shell configuration file. 
  - `export PATH="$HOME/.pn:$PATH"`
- If you are not logged in with `gh` or do not have the read:packages privilege, a web login prompt will be started.
  - `gh auth login -s read:packages -w --git-protocol https`
- The `gh` client will be used to athenticate docker using this command. To login manually use
  - `gh auth token | docker login ghcr.io -u grokit-data --password-stdin`.
- The latest paranet-cli will be downloaded and linked to `pn`. If your path is set correctly you should be able to check the version anywhere on the system with `pn -V`.
- The install script will also be downloaded to `$HOME/.pn` so you can update using `pn-install` to update. Use can use `pn-install latest` or `pn-install vx.y.z` to download a specific version.


### Required VSCode Extensions

Install the following extensions in VScode:

- **Paranet Extension**: [Releases](https://github.com/grokit-data/paranet/releases)
   - > **Note**: This extension is not available on the VSCode Marketplace. You'll need to install it manually from a .vsix file. You'll find this in the releases section of this repo.
- **Docker Extension:** [Install](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- **WebAssembly Execution Engine:** [Install](https://marketplace.visualstudio.com/items?itemName=ms-vscode.wasm-wasi-core)
   - > **Note**: This extension may need to be manually installed if it's in preview.

## Installation

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

- # TODO
- Add Updated Image

**1. Environment Check**
- Verify Docker Installation
- Authorize with Github
   - Log into Github's docker registry with this command, replacing username and token with your Github username + Oauth token

**2. Running Your Paranet**
- # TODO
- deploy docker container or create paranet button or command line?

**3. Running Your Actors**
- # TODO
- deploy actors or single button?

**4. Verify your paranet is running**
- Green dots
- Docker extension
- Paracord deployed list

**Step 5: Using Paracord**

Paracord is the client application for interacting with your Paranet nodes.
- # TODO:
- Launch Paracord locally or hosted?
- Connect to a Paranet
- ORA
- Interacting with your Actors
- View or documentation for more extensive information

## Learning Resources

- **Documentation:** Detailed guides and references are available a [docs.paranet.ai](https://docs.paranet.ai)
- **Project Examples:** Examples folder within this repository

## Troubleshooting

### Docker isn't being recognized

Ensure Docker is installed in the default location, typically `/usr/local/bin/docker`.

