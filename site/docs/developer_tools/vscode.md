---
id: vscode
title: VSCode Extension
draft: true
sidebar_position: 2
---

# Paranet

The paranet extension makes it easy to view, edit and deploy resources on the paranet.

## Environment Check

This section helps get your environment setup to deploy a paranet locally and start creating actors. To deploy our docker images, we first need to login.

### Dependencies

- [Docker](https://docs.docker.com/engine/install/)
- [Github personal access token (classic)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) (used for docker auth)

### Docker auth

Clicking the `+ Login` section will call the `Docker Login` command which can also be accessed through the command pallet. This will prompt you to login to the [Github Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-with-a-personal-access-token-classic).

If you would prefer to directly login on your machine, you can instead run the following command:

```bash
export CR_PAT=YOUR_TOKEN
echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
```

or equivalent where `USERNAME` is your Github username and `YOUR_TOKEN` is your access token.

If you need help instructions on personal access token generation, see the link above in the Environment Check section.

### Docker apps

From here we can deploy a local test paranet called `testdrive` that will allow us to deploy and simulate actors as well as a local `Paracord` website to act as the frontend. These status will display next to each app. If they are already `running` there's no further action needed. The `Redeploy` button will start a new deployment of the app. For the `paracord` app, the `Open Paranet` button will connect through the browser.

## Actors

In order to display and interact with an ORA, a folder must be opened with a `ora.yaml` file at the root. In the https://github.com/otonoma/getting-started repo, either the `hello_world` or the `ping` folders can be opened.


This will create a new tree with the name of the ORA, clicking it will open the corresponding `ora.yaml` file. Expending the ORA in the tree will list each paraflow actor in the file. These can also be clicked to show the paraflow file. There are two command icons. The first is the `Redeploy paraflow runner`. The state of the runner can be seen by expending the actor node. When the runner is in the `running` state, the `Reload paraflow` button can be used to load the current paraflow file into the runner. Using Paracord, you can interact with the actor to see changes to the code.