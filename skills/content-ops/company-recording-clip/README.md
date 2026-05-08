# Company Recording To Postable Clip

Finds a source recording, locates a fuzzy spoken moment, trims a tight clip, and routes approval/handoff.

## Inputs

- Recording source or fuzzy request
- Speaker/quote
- Approval owner
- Intended channel

## Outputs

- Tight MP4 clip
- Optional designed version
- Approval message draft
- Tracker row

## Setup

1. Connect the required systems through Zapier MCP, the Zapier SDK, or the coding-agent connectors your team uses.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run the onboarding prompt in `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
