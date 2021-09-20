import { Choice } from 'prompts'
import { global_agents, agent_types } from './agents'

export const agent: Choice = {
    title: 'Agent type',
    value: [...global_agents]
}

export const agent_type: Choice = {
    title: 'Agent functionality',
    value: [...agent_types]
}