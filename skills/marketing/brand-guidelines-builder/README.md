# Brand Guidelines Builder

Helps non-designers evaluate creative assets or ideas against brand guidelines.

## Inputs

- Design image or brief
- Brand guidelines
- Asset context

## Outputs

- Brand alignment score
- Fix list
- Escalation path

## Setup

1. Connect the required systems through Zapier MCP, the Zapier SDK, or the coding-agent connectors your team uses.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run the onboarding prompt in `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
