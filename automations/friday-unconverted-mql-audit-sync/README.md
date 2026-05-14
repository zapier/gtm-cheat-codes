# Friday Unconverted MQL Audit Sync

## Use When

Use this when the team needs a weekly closeout view of unconverted MQLs and follow-up accountability.

## What It Does

End-of-week sync/check on hand-raiser audit status and reporting.

## Status

Automation spec. Review, adapt, and test before enabling.

## Trigger

Friday closeout schedule.

## Inputs

- Current tracker state
- CRM status
- Owner context
- Meeting movement
- Blockers

## Outputs

- Friday closeout summary
- Accountability view
- Follow-up log after approval

## Zapier MCP Role

Use Zapier MCP to read current tracker state, CRM status, owner context, and meeting movement.

## Zapier SDK Fit

Use Zapier SDK for sync generation, follow-up logging, approval routing, and logs.

## Approval Gates

- Do not send rep or customer messages without approval.
- Do not post long lead dumps.
- Do not write source-of-truth records unless the run contract explicitly allows it.
