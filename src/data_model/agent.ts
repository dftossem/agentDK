const agent = {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://dima.unal.edu.co/agent.schema.json",
    "title": "Agent properties",
    "description": "Industry 4.0 agent properties schema",
    "type": "object",
    "nature": {
        "options": ["Human", "Machine"],
        "description": "Two unique categories of company's resources",
        "type": "string",
    },
    "work": {
        "options": {
            "Computation": {
                "options": ["TODO"],
                "description": "TODO",
                "type": "string",
            },
            "Manufacturing": {
                "options": ["Additive", "Substractive"],
                "description": "TODO",
                "type": "string",
            },
            "Manipulator": {
                "options": ["Mobile", "Static"],
                "description": "TODO",
                "type": "string",
            },
        },
        "description": "Resource main function",
        "type": "string",
    },
    "required": ["nature", "work"]
}

export default agent