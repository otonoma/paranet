import { Agent, Skill, Requester, startAgent, Field, InputType, Conversation, OutputType } from 'ts-paranet-agent';

@Agent({ subject: 'typescript' })
class Hello {
  
  // Define a skill for the agent as a function

  @Skill({ action: 'greet' })
  greet(requester: Requester): string {
    return `TypeScript says hello ${requester}`;
  }
}

startAgent(new Hello);