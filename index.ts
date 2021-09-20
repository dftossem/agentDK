import prompts, { PromptObject } from 'prompts'
import { agent, agent_type } from './src/agents/choices'

const questions: PromptObject[] = [{
    type: 'multiselect',
    name: agent.title,
    message: 'Your agent type',
    choices: [...agent.value],
    max: 1,
    hint: '- Space to select. Return to submit',
},
{
    type: 'multiselect',
    name: agent_type.title,
    message: 'Your agent functionality',
    choices: [...agent_type.value],
    max: 1,
    hint: '- Space to select. Return to submit',
}]

async function show() {
    var agent_config: Object = {}
    agent_config = await prompts(questions)
    console.log(agent_config)
}

show()