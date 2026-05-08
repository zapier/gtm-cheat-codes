# Clip Approval And Handoff

Routes rendered clips for approval, logs assets, and creates distribution handoff tasks.

## Status

Automation spec. Review, adapt, and test before enabling.

## Source

This package uses sanitized implementation guidance. Connect it to your approved systems before running.

## Zapier SDK Fit

This workflow is a good candidate for a Zapier SDK runner because it benefits from schedule/trigger handling, deterministic source reads, state tracking, and approval-gated chat or tracker updates.

## Approval Gates

- Do not send rep/customer messages without approval.
- Do not post long lead dumps.
- Do not write source-of-truth records unless the run contract explicitly allows it.
