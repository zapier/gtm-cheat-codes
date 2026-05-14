# Daily Lead Steward

## Use When

Use this when managers need a daily operating view of high-intent leads that need attention, follow-up, or escalation.

## What It Does

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

1. Read `SETUP.md` for Zapier MCP and Zapier SDK configuration.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
