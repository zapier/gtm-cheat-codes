# Named Account Trigger Radar

## Use When

Use this when sales, ABM, or RevOps needs to know which target accounts deserve attention now.

## What It Does

Ranks named accounts by actionability and turns signals into owner-ready next moves.

## Inputs

- Target account pool
- CRM context
- Company-approved signals
- Public triggers

## Outputs

- Ranked account list
- Why-now evidence
- Recommended next move
- Watchlist

## Setup

1. Read `SETUP.md` for Zapier MCP and Zapier SDK configuration.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
