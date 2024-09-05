# Welcome to the Paranet

This repository is designed to help you get started developing with our technology and tools.

<hr/>

## Tools Required

### External:
- [**Git**](https://www.git-scm.com/downloads)
- **Docker**
  - [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - [Docker Compose](https://docs.docker.com/compose/install/)
- **AWS**
  - [AWS CLI](https://aws.amazon.com/cli/)
  - [AWS SSO Configuration](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html)
- **VScode**
  - [VSCode](https://code.visualstudio.com/)
    - Extensions:
      - [Docker] (https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
      - [Experimental - WebAssembly Execution Engine] (https://marketplace.visualstudio.com/items?itemName=ms-vscode.wasm-wasi-core)
 
### Grokit:
 - **Paradocs: our custom VScode Extension**
   - [Version 0.0.19](https://github.com/grokit-data/paradocs-vscode/releases/tag/v0.0.19)
<hr/>

# Getting Started

## Step 1: Initial Setup

- **Open VSCode**
  - Download our Paradocs extension by Grokit with the link above.
  - In the Exentsions menu, click the menu icon on the left side panel and choose "Install from VSIX".
  - Choose the file VSIX download file from the extension release above --^
<img width="652" alt="Screenshot 2024-08-22 at 3 53 34 PM" src="https://github.com/user-attachments/assets/ef7b45e5-46c7-4913-a6bc-2fbf58bb8d9e">

## Step 2: Environment Setup

The Paradocs extension makes it easy to view, edit, and deploy resources on the Paranet.

Note: You must manually install ms-vscode.wasm-wasi-core. This is because our extension cannot be recognized as a pre-release by VS Code.

ENV Setup
This section will guide you through setting up your environment to deploy a Paranet locally and start creating actors. To deploy our Docker images, we first need to log in.

<img width="421" alt="Screenshot 2024-08-22 at 3 52 08 PM" src="https://github.com/user-attachments/assets/fd4a45aa-ed68-45c0-bf20-dd9e7759d7d9">


1. Docker Authentication
To complete the Docker login, the extension uses the Docker and AWS CLI. You can download them from the following links:

AWS CLI
Docker
Once both are installed, a checkmark will be displayed next to their name, along with the version number.

Login:
Click the + Login section. This will call the Docker Login command, which can also be accessed through the Command Palette.
You will be prompted to select the AWS profile used to connect to ECR. For more information on setting this up, visit the AWS SSO Configuration Guide.
A notification will display the stage and prompt you to complete the SSO login if necessary.
2. Docker Applications
You can deploy a local test Paranet called testdrive to simulate actors, as well as a local Paracord website to serve as the frontend. The status of these apps will be displayed next to each app in the interface.

If the apps are already running, no further action is needed.
Redeploy: Clicking the Redeploy button will start a new deployment of the app.
Open Paradocs: For the Paracord app, click the Open Paradocs button to connect through the browser.
3. ORAs (Operational Resource Agents)
To display and interact with an ORA, a folder must be opened containing an ora.yaml file at its root. You can find example folders in the within this very repo, such as hello_world or ping.

<img width="419" alt="Screenshot 2024-08-22 at 3 52 56 PM" src="https://github.com/user-attachments/assets/9c6a319b-9274-4421-9a5e-b286c42cad61">

Opening an ORA:

This will create a new tree with the name of the ORA. Clicking it will open the corresponding ora.yaml file.
Expanding the ORA in the tree will list each Paraflow actor in the file. Clicking on these actors will open their respective Paraflow files.
Commands:

Redeploy Paraflow Runner: The state of the runner can be seen by expanding the actor node. When the runner is in the running state, the Reload Paraflow button can be used to load the current Paraflow file into the runner.
Interaction: Using Paracord, you can interact with the actor to see changes in the code.

**Congratulations, you're ready to start developing locally on the Paranet!**

---

## Learning Resources: ...coming soon!

- **The Paranet:** A secure, smart network where humans and machines collaborate to perform work.
- **Paraflow:** A custom-built workflow language, the foundation of the Paranet.
- **Paradocs:** A custom integrated development environment (IDE), think VSCode with additional features designed for the Paranet.
- **Paracord:** An enterprise tool for interacting with both local and cloud-based Paranodes.

## Troubleshooting

**AWS SSO not logged in**
- In your terminal
  - Enter ```aws configure list-profiles```
  - If you don't see a profile listed, head to AWS and create a SSO user.
  - If you see a profile listed
    - ```aws sso login —profile [your access user]```
   
**Docker installed but Paradocs can't recognize it**
- Make your Docker is installed to the following URI path: ```user/ ```


