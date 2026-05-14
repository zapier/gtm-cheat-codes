# Daily Notable Lead Audit

## Use When

Use this when the team needs a daily check on new high-intent leads and whether they are moving toward meetings.

## What It Does

Daily new-source audit plus booked-meeting tracker for high-intent leads.

## Status

Automation spec. Review, adapt, and test before enabling.

## Trigger

Daily schedule.

## Inputs

- New high-intent leads
- CRM state
- Owner assignment
- Meeting status
- Tracker rows

## Outputs

- Daily audit summary
- Owner-ready next actions
- Tracker updates after approval

## Zapier MCP Role

Use Zapier MCP to read live CRM, tracker, chat, and meeting context during each run.

## Zapier SDK Fit

Use Zapier SDK for scheduling, state tracking, approved summary routing, and logs.

## Approval Gates

- Do not send rep or customer messages without approval.
- Do not post long lead dumps.
- Do not write source-of-truth records unless the run contract explicitly allows it.
