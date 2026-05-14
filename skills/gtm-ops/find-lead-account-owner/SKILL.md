---
name: find-lead-account-owner
description: Resolve the right account owner for a lead using contact, company, and deal ownership evidence.
---

# Find Lead Account Owner

Use this helper when a lead audit, hand-raiser workflow, or SDR worklist needs authoritative owner enrichment.

## Resolution Order

1. Contact owner.
2. Company owner.
3. Deal owner.
4. None assigned.

## Workflow

1. Open the contact record.
2. Check contact owner first.
3. If missing, inspect primary company owner.
4. If missing, inspect relevant open or recent deal owner.
5. Enrich owner segment, team, manager, and account size from approved systems.

## Zapier MCP And SDK Role

- Use Zapier MCP to read CRM contact, company, deal, and ownership data.
- Use Zapier SDK only when this helper becomes part of a repeatable lead audit, routing workflow, or SDR worklist.
- Do not change owner assignments without explicit approval.

## Guardrails

- Do not infer owner from timeline activity.
- Do not use a lower-priority owner field when a higher-priority field exists.
- Preserve provenance for every returned owner.
