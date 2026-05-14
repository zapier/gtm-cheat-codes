---
name: inbound-lead-audit-cx-map
description: Audit inbound lead handling and map the customer experience from source event to follow-up outcome.
---

# Inbound Lead Audit + CX Map

Use this skill to inspect how an inbound lead or hand-raiser was treated and produce an action-focused summary.

## Workflow

1. Identify the lead source and current-cycle event.
2. Review CRM timeline, owner assignment, outreach, meeting status, and routing evidence.
3. Distinguish automated touches from real human follow-up.
4. Map the customer experience in plain language.
5. Recommend the next owner action and any process fix.

## Zapier MCP And SDK Role

- Use Zapier MCP to read CRM timelines, routing evidence, tracker rows, meeting status, and collaboration context.
- Use Zapier SDK for scheduled audits, tracker updates, issue logging, and approval-routed summaries.
- Keep rep escalations and source-of-truth writes human-reviewed.

## Guardrails

- Do not count historical meetings from prior cycles as current-cycle success.
- Do not infer human outreach from automation enrollment alone.
- Keep any screenshots, lead data, and source URLs private.
