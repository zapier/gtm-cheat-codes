# Mega Campaign Generator

Turns campaign notes, GTM discussions, and source documents into a review-first outbound campaign package.

## Inputs

- Campaign objective
- Audience or segment
- Trigger or signal
- Source docs or threads
- Reference copy

## Outputs

- Strategy checkpoint
- Subject lines
- Email and LinkedIn sequence
- Operator notes
- Open questions

## Setup

1. Connect the required systems through Zapier MCP, the Zapier SDK, or the coding-agent connectors your team uses.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run the onboarding prompt in `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
