# Find Lead Account Owner

Resolves the correct owner for a lead with a strict contact, company, deal fallback order.

## Inputs

- Contact record
- Company record
- Deal record
- Org directory source

## Outputs

- Owner
- Owner source
- Segment/team
- Manager
- Account size

## Setup

1. Connect the required systems through Zapier MCP, the Zapier SDK, or the coding-agent connectors your team uses.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run the onboarding prompt in `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
