# Clip Approval And Handoff

## Use When

Use this when a clip is ready but still needs approval, logging, and distribution coordination.

## What It Does

Routes rendered clips for approval, logs assets, and creates distribution handoff tasks.

## Status

Automation spec. Review, adapt, and test before enabling.

## Trigger

Clip asset marked ready for review.

## Inputs

- Clip asset
- Source request
- Approval owner
- Publishing destination
- Tracker row

## Outputs

- Approval message
- Updated tracker status
- Distribution handoff

## Zapier MCP Role

Use Zapier MCP to read clip assets, approval status, tracker rows, and publishing handoff context.

## Zapier SDK Fit

Use Zapier SDK for approval routing, status logging, and distribution handoff.

## Approval Gates

- Do not publish or broadly share clips without approval.
- Do not mark assets final until the approval owner signs off.
- Do not write tracker state unless the run contract explicitly allows it.
