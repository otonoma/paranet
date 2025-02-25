---
id: skills
title: Skills
sidebar_position: 3
---
# Skills

### Skill Decorators

Events preceded by a skill decoration correspond to a Paranet skill provided by the Paraflow program. The descriptor defines the subject and action of the implemented skill.
```
%skill(subject=messaging, action=send)
event newSendMessage($message string, $conversation string, $requester string) {
⋮
}
```
The skill decoration does two things:

- The Paraflow code is registered as a provider of the skill on the Paranet.
- The Paraflow event is registered as the callback that is invoked whenever a new request is matched to this program.

The `conversation` and `requester` parameters are predefined and assigned the unique conversation ID and requesting actor ID of the corresponding skill request. All other event parameters are registered as inputs for the skill.

### Skill Requests

The following is an example of a PNCP skill request task:
```
task !SendMessage($message, $actor) is
  pncp messaging/send($message) to $actor;
```
This task delegates `!SendMessage` goals to the Paranet. When the planner matches a goal to this task, the corresponding skill request will be made to the Paranet. The goal will be considered complete once the skill request response is received.

Here’s an example of a skill request that has a response.
```
task !FetchDeviceStatus($device_id) is
  let { $status } = pncp devices/get_status($device_id) in {
  update devices(id == $device_id, $status);
}
```
This example shows how to consume a response from a delegated task. The skill returns a status value for a given device. The left-hand side of the `let` statement describes the expected response data. When the response is received, a `$status` variable will be assigned the value from the response and the `in` statement body will be executed. In this example, the `update` statement is used to write the response to a database table.