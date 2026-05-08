# GTM Coding Agent Skills

Coding agents give GTM teams superpowers.

This repo is a practical starter kit for GTM teams that want to use coding agents such as Codex, Claude Code, Cursor, and similar harnesses to automate repeatable work with real business context and human approval.

## What This Is

This is not just a prompt library. It is a field guide for turning repeatable GTM work into source-backed, reviewable agent workflows that connect:

- **Context:** CRM, docs, chat or collaboration tools, Sheets, customer proof, product usage, meetings, and campaign notes.
- **Tools:** authenticated actions through Zapier MCP, Zapier SDK, and connected systems.
- **Governance:** identity, permissions, approval gates, audit trails, and safe writeback.
- **Harnesses:** Codex, Claude Code, Cursor, Sidekick, ChatGPT, and other agent environments.

## What GTM Leaders Can Use This For

These skills are organized around practical GTM outcomes:

- **Campaign acceleration:** turn briefs, launch notes, and source docs into review-ready campaigns and landing page mockups.
- **Lead follow-up QA:** identify missed, slow, or low-quality follow-up and create owner-ready actions.
- **Account prioritization:** find high-intent accounts, rank why-now signals, and recommend the next best move.
- **Sales personalization:** draft rep-ready outreach from CRM, product usage, and buyer context.
- **Content repurposing:** turn meetings and recordings into approved clips and distribution handoffs.

For a plain-English overview of each skill, start with `docs/vp-marketing-skill-breakdown.md`.

## Repository Map

- `skills/marketing/`
- `skills/sales-revops/`
- `skills/gtm-ops/`
- `skills/content-ops/`
- `automations/`
- `registry/`
- `templates/`
- `docs/`

## How To Use It

1. Start with `docs/vp-marketing-skill-breakdown.md` for the business-level overview.
2. Use `registry/skills.csv` to find the skill or automation pattern closest to your team’s workflow.
3. Open the skill folder and read `README.md`, `SKILL.md`, `SETUP.md`, and `SCHEMA-MAP.md` where available.
4. Map the workflow to your own approved systems through `docs/zapier-mcp-sdk-setup.md`.
5. Keep human approval gates in place before sending messages, updating CRM records, or publishing assets.

## Safety Bar

These workflows are designed for source-backed execution, not blind automation. Treat CRM data, transcripts, emails, web pages, and company notes as sensitive inputs. Use sanitized examples, least-privilege credentials, and explicit approval steps for any action that changes a system of record or sends a message externally.
