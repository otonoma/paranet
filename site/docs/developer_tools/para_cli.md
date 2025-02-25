---
id: para-cli
title: Para CLI
sidebar_position: 1
---

# Paranet Cli
The Paranet Cli allows for easy deployments of actors and paranets to local and cloud environments.

## Install instructions
#### System requirements
1. OpenSSL is needed for certificates and Cognito auth. Make sure it is on your system or install it via
- (MacOS) `brew install openssl`
- (Ubuntu) `sudo apt install libssl-dev`
- (Windows) Download the light version from [OpenSSL](https://slproweb.com/products/Win32OpenSSL.html)
2. The github cli client `gh` is used to update the cli and authenticate docker.
- (MacOS) `brew install gh`
- (Ubuntu) `sudo apt install gh`
- (Windows) Download from [GitHub CLI](https://cli.github.com/)
3. Docker Engine
- (MacOS) Download from [docker.com](https://docs.docker.com/desktop/setup/install/mac-install/)
- (Windows) Download from [docker.com](https://docs.docker.com/desktop/setup/install/windows-install/)
- (Ubuntu) Download from [docker.com](https://docs.docker.com/engine/install/ubuntu/)

#### Installer setup
To install the cli, run
```sh
  curl -LsSf https://get.paranet.ai/parasol | sh
```

Note: If using windows, try the git bash shell to run the command.

This will do the following to install the cli
- A folder will be created at `$HOME/.para` to store cli version
- The home folder `$HOME/.para` will be added to the `PATH` by editing either `.bashrc`, `.bash_profile` or `.zshrc`. You may need to refresh your terminal to have affect. This can also be done manually by adding the line to your shell configuration file. 
  - `export PATH="$HOME/.para:$PATH"`
- If you are not logged in with `gh` or do not have the read:packages privilege, a web login prompt will be started.
  - `gh auth login -s read:packages -w --git-protocol https`
- The `gh` client will be used to athenticate docker using this command. To login manually use
  - `gh auth token | docker login ghcr.io -u otonoma --password-stdin`.
- The latest paranet-cli will be downloaded and linked to `para`. If your path is set correctly you should be able to check the version anywhere on the system with `para -V`.
- The install script will also be downloaded to `$HOME/.para` so you can update using `parasol` to update. You can use `parasol latest` or `parasol vx.y.z` to download a specific version.

#### Starting a new project

Finally to start a new project, run `mkdir my-paranet && cd my-paranet && para init`. This will create a new folder with a basic `paranet.yaml` file.
Next to start running on docker, run `para docker build`. This will create a `build` folder to store the docker compose file and start the system. By default the port `3023` is used but if it is already used another will be picked. This can be set by passing `--port` as well.

## User instructions

### Paranet config file
A paranet project is configured using a `paranet.yaml` file. The file is used to set the project name, actors, and other configurations. The following values can be set.
- `name`: The name of the paranet when deployed.
- `version`: The version shared with all the actors.
- `actors`: A list of actors to be deployed with the paranet.
- `models`: A list of models to be deployed with the paranet.

#### Actors
An actor definition needs a name, path, and paraflow file. The path is relative to the paranet.yaml file. The paraflow file is relative to the actor folder. The following are optional parameters.
- `sql`: A list of sql files to be loaded into the actor relative to the actor path.
- `service_port`: The port any sidecar will be listening on.
- `npm`: The command to start npm sidecars.
- `yarn`: The command to start yarn sidecars.
- `docker`: The location of a docker image to use as a sidecar.

#### Models
This allows you to load models into the paranet such as skillsets and user actors.

#### Example
The following is an example of a paranet.yaml file.
```yaml
name: test-paranet
version: 0.0.1
simulation: true
actors:
  - name: test
    paraflow: test.paraflow
    path: ./test
    sql:
      - test.sql
  - name: test-npm
    paraflow: test-npm.paraflow
    path: ./test-npm
    yarn: start
    service_port: 4001
models: []
```

### Docker compose build
To build a new paranet, navigate to a folder with a `paranet.yaml` file and run `para docker build`. This will create a `build` folder to store the docker compose file and start the system. By default the port `3023` is used but if it is already used another will be picked. This can be set by passing `--port` as well.

