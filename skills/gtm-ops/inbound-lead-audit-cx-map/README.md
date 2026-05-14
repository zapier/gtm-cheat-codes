# Inbound Lead Audit + CX Map

## Use When

Use this when a leader wants to understand what happened after a high-intent lead raised their hand.

## What It Does

Audits inbound lead handling and maps the customer experience from form fill or hand raise to follow-up.

## Inputs

- Lead source
- CRM URL or row
- Timeline evidence
- Routing rules

## Outputs

- Observed journey
- What failed or worked
- Severity
- Recommended fix

## Setup

1. Read `SETUP.md` for Zapier MCP and Zapier SDK configuration.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
