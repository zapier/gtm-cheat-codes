# Company Recording To Postable Clip

## Use When

Use this when a team knows a useful moment happened in a meeting, event, webinar, or internal recording but does not have a clean clip ready to share.

## What It Does

Finds a source recording, locates a fuzzy spoken moment, trims a tight clip, and routes approval/handoff.

## Inputs

- Recording source or fuzzy request
- Speaker/quote
- Approval owner
- Intended channel

## Outputs

- Tight MP4 clip
- Optional designed version
- Approval message draft
- Tracker row

## Setup

1. Read `SETUP.md` for Zapier MCP and Zapier SDK configuration.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `metadata.yaml` and `SCHEMA-MAP.md` to your approved systems.
4. Run `ONBOARDING-PROMPT.md` before the first real workflow.

## Safety

Keep a human approval step before sending messages, updating CRM fields, posting publicly, or changing source-of-truth records.
