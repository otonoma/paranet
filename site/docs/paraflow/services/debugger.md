---
id: debugging
title: Debugger
draft: true
sidebar_position: 2
---

# Paraflow Debugger

The VSCode extension for Visual Studio Code provides an integrated Paraflow debugger providing a familiar debugging experience for Paraflow actors.
The debugger supports multiple-actor debugging which allows you to step through complex workflows across skill requests from one actor into another.

The following screenshot shows the debugger stopped at a breakpoint while debugging an example two-actor system.

![Debugger Screenshot](/img/paraflow-debugging-screenshot.png)

For debugger usage documentation refer to Visual Studio Code's official [Debugging Documentation](https://code.visualstudio.com/docs/editor/debugging).  Although the debugging experience should be same as debugging any other language with VS Code, there a couple of things to take note of.

1. If you are not familiar with multi-threading debugging, take note that there are two separate call stacks listed in the screenshot above, `hello_world` and `tickets`.  That's because we are debugging a multi-actor system that execute independently.  The debugger allows you to see the state of all the actors at the same time in the CALL STACK view.  You can also see the local variables defined in any actor as shown in the VARIABLES view by clicking the actor name in the CALL STACK view.
2. When stepping over a PNCP request statement in Paraflow, the debugger will typically stop at the event statement within the actor receiving the request.  The debugger will continue stepping in the receiving actor until there is nothing more to do there.
3. Whenever you are stepping through one actor while there are other actors that are also stopped, it is possible to switch to stepping through any of those other actors instead of continuing in the current actor.  To do that, move the mouse cursor over the top of the name of the actor you wish to switch to in the CALL STACKS view.  You should see some control icons pop up next to the name and you can click the step icon there to single step that specific actor.