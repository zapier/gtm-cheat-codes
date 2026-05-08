# No Lead Left Behind Lead Treatment Audit

Audits lead treatment quality, flags missed or low-quality follow-up, and creates owner-ready actions.

## Inputs

- Lead cohort
- CRM records
- Source posts
- Outreach evidence
- Meeting evidence

## Outputs

- Severity-scored findings
- Owner enrichment
- Tracker rows
- chat-ready summary

## Setup

1. Connect the required systems through Zapier MCP, the Zapier SDK, or the coding-agent connectors your team uses.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run the onboarding prompt in `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
