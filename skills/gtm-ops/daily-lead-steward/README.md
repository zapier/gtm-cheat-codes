# Daily Lead Steward

Maintains a daily cockpit for high-intent enterprise and large-enterprise leads.

## Inputs

- Lead tracker
- CRM records
- Source threads
- Meeting status

## Outputs

- Daily cockpit
- Priority watchlist
- chat-ready digest
- Recommended actions

## Setup

1. Connect the required systems through Zapier MCP, the Zapier SDK, or the coding-agent connectors your team uses.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run the onboarding prompt in `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
