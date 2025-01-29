---
id: hello-world
title: Hello World
draft: true
sidebar_position: 1
---

# Hello Actor Walkthrough

Let's create a simple actor on the Paranet and test it.

## Step 1 - Define the Skill

For this first actor, we are going to implement the skill of saying hello. When a Paranet user (aka another actor) makes a request to `hello`, our actor will receive the request and respond with a hello message.

We can define a skill as follows:

```paraflow
%skill(subject=messaging, action=hello)
event helloRequest($name string, $conversation string) {
  !sayHello($name, cid -> $conversation);
}
```

The event definition specifies how to respond when an external event occurs, such as a new skill request. When the event is annotated with the skill declaration, it automatically registers as a skill on the Paranet.

Let's break down the example code:

1. **Skill Declaration**: The first line defines a skill that responds to requests with the subject `messaging` and the action `hello`.

2. **Event Definition**: The second line introduces the event `helloRequest`, which takes two parameters:
   - `$name`: A string representing the name to be used in the greeting.
   - `$conversation`: A unique identifier associated with each skill request (note: all variable and parameter names in Paraflow are prefixed with `$`).

3. **Parameter Usage**: When the skill is registered on the Paranet, these parameters inform the Paranet about the input data required by the skill. In this example, the requester must provide a name that the actor will use in its greeting.

4. **Event Body**: The body of the event, enclosed in `{}`, contains the instructions executed whenever the actor receives a request for this skill. Since Paraflow is goal-driven, achieving an outcome involves creating a goal, which Paraflow then works asynchronously to fulfill. 

   - In our example, the goal `!sayHello` is created with the parameters `$name` and `cid`. 
   - The syntax `cid -> $conversation` directs the value of `$conversation` to the `cid` parameter of the goal.
   - The `$name` parameter is passed directly without the `->` syntax, which is shorthand for `name -> $name`.

## Step 2 - Implement Goal Strategy

Now that we've defined the event that creates parameterized goals called `!sayHello`, we need to describe how to perform these goals. The simplest way to define how to achieve a goal is by creating a task for it, as shown below:

```paraflow
task !sayHello($name, $cid) {
  let $message = "Hello " + $name + "!";
  pncp response($message) to $cid;
}
```
Breaking Down the Task Definition:
Task Definition:

The task keyword defines how to accomplish goals that match a specific pattern.
In this example, the goal pattern !sayHello($name, $cid) indicates that this task is applicable to goals named !sayHello with the parameters name and cid.
Task Body:

The body of the task specifies the actions to be performed when a goal matches the defined pattern.
In this example, the task is achieved by constructing a message ("Hello " + $name + "!") and sending a Paranet response to a specific conversation using the unique ID stored in the $cid parameter.
Executing the Task:

The pncp response($message) to $cid; line sends the generated message to the conversation associated with the $cid. This is how the task fulfills the !sayHello goal.
Advanced Task Features:
Complex Goal Patterns: Tasks can have more complex goal patterns, allowing for more nuanced handling of different goals.
Multiple Tasks for the Same Goal: It's possible to define multiple tasks that apply to the same goal, providing flexibility in how goals are achieved.
Rules for Subgoals: Goals can also be implemented by rules that describe how a goal can be broken down into smaller subgoals. These advanced features will be covered in later guides.

## Step 3 - Try It Out

To try out the code, follow these steps:

1. **Create a `.paraflow` File**:
   - Use Visual Studio Code with the Paranet VSCode eextension to create a `.paraflow` file.
   - Paste the complete code from the previous steps into the file:


```%skill(subject=messaging, action=hello)
event helloRequest($name string, $conversation string) {
    !sayHello($name, cid -> $conversation);
}

task !sayHello($name, $cid) {
    let $message = "Hello " + $name + "!";
    pncp response($message) to $cid;
}
```

Launch Paracord:

Open Paracord and navigate to the Advanced tab.
Select the Hello actor. You should see the hello skill listed.
Send a Hello Request:

Click on the hello skill to send a new hello request.
Observe how the actor responds according to the logic defined in the .paraflow file.
This step allows you to see your code in action, interacting with the Paranet to fulfill the hello skill request.
