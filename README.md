# GTM Coding Agent Skills

Coding agents can help GTM teams turn scattered context into reviewable work products.

This repo is a practical starter kit for GTM and customer operations teams that want to use coding agents such as Codex, Claude Code, Cursor, and similar harnesses to automate repeatable work with real business context and human approval.

## What This Is

This is not just a prompt library. It is a field guide for turning repeatable GTM work into source-backed, reviewable agent workflows that connect:

- **Context:** CRM, docs, chat or collaboration tools, Sheets, customer proof, product usage, meetings, and campaign notes.
- **Tools:** authenticated actions through Zapier MCP, Zapier SDK, and connected systems.
- **Governance:** identity, permissions, approval gates, audit trails, and safe writeback.
- **Harnesses:** Codex, Claude Code, Cursor, Sidekick, ChatGPT, and other agent environments.

## Start With The Business Problem

If you are a marketing, sales, customer operations, or business operations leader, start here:

- **Campaign planning:** turn briefs, launch notes, and source docs into campaign packages and page mockups.
- **Campaign learning:** turn campaign data and team feedback into a sourced postmortem with clear next actions.
- **Lead follow-up QA:** find missed, slow, or low-quality follow-up and create owner-ready actions.
- **Account prioritization:** rank target accounts by why-now signals and recommend the next move.
- **Sales personalization:** draft rep-ready outreach from CRM, product usage, and buyer context.
- **Customer decks:** turn account context, usage signals, and meeting goals into customer-ready decks.
- **Cross-CRM coordination:** keep opportunity, account, and customer context aligned across multiple CRMs.
- **Customer proof:** find approved customer stories, quotes, stats, and peer examples for campaigns or sales.
- **Customer storytelling:** turn approved interviews, notes, and proof points into customer story drafts.
- **Content repurposing:** turn meetings and recordings into approved clips and distribution handoffs.
- **Support triage:** help support reps research tickets across helpdesk, issue-tracking, backlog, and knowledge-base systems.
- **Legal operations:** prioritize urgent client callbacks from call transcripts and approved case context.

For a plain-English overview of each skill, start with `docs/vp-marketing-skill-breakdown.md`.

## Repository Map

- `skills/marketing/`
- `skills/customer-advocacy/`
- `skills/sales-revops/`
- `skills/customer-support/`
- `skills/legal-operations/`
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
4. Map the workflow to your own approved systems through `docs/zapier-mcp-sdk-patterns.md`.
5. Keep human approval gates in place before sending messages, updating CRM records, or publishing assets.

## Safety Bar

These workflows are designed for source-backed execution, not blind automation. Treat CRM data, transcripts, emails, web pages, and company notes as sensitive inputs. Use sanitized examples, least-privilege credentials, and explicit approval steps for any action that changes a system of record or sends a message externally.
