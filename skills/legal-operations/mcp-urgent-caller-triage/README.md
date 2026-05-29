# MCP Urgent Caller Triage For Law Firms

Prioritize inbound client calls by reading transcripts, classifying urgency, matching callers to legal client and matter context, and preparing a callback list for human review.

## Use When

Use this when a law firm has a high volume of inbound calls and support, intake, or legal ops teams need to know which callbacks are urgent before they return the call.

## What It Does

- Pulls call transcripts from an approved phone or VoIP system through Zapier MCP.
- Classifies each transcript as Critical, Urgent, or Standard.
- Matches the caller to a legal client record and open matters in Clio or a similar system.
- Adds approved context such as deadline category, owner, coarse billing flag, and recent activity.
- Routes a prioritized callback list to Slack, email, Google Sheets, or another approved destination.

## Inputs

- Call transcript, call ID, or recent call-log request.
- Caller metadata from the approved phone or VoIP system.
- Approved legal client and matter context from Clio or a similar system.
- Urgency rules and practice-area-specific signals.
- Approved delivery destination and owner routing rules.

## Outputs

- Urgency tier and neutral reason.
- Masked caller identifier and secure source link.
- Assigned owner and recommended next step.
- Deadline category for prioritization.
- Optional dashboard row or digest entry with sensitive details omitted by default.

## The Problem It Solves

Client-facing teams often return calls without knowing why the caller reached out, whether a legal deadline is near, or whether the caller has already tried several times. This workflow assembles the context first so the firm can respond in the right order and with the right owner.

## Stack Requirements

| Component | Options |
| --- | --- |
| Phone system | RingCentral, Dialpad, OpenPhone, Vonage, Aircall, or any approved transcript source |
| Legal case management | Clio, PracticePanther, MyCase, or a similar approved system |
| LLM | Claude, GPT, Gemini, or another approved model |
| Delivery | Slack, email, Google Sheets, or another approved channel |
| Agent harness | Cursor, Claude Desktop, Codex, or another MCP-compatible agent |

## Setup

1. Read `SETUP.md` for Zapier MCP and delivery-channel setup.
2. Copy `SKILL.md` into your agent skill directory.
3. Adapt `SCHEMA-MAP.md` to your phone, case management, and delivery systems.
4. Run `ONBOARDING-PROMPT.md` before the first pilot.
5. Test with approved sample transcripts before using live client data.

## Safety

Use least-privilege connections. Keep callbacks, client-facing messages, matter updates, billing changes, and broad alerts behind human approval. Do not paste sensitive transcripts into unsupported tools or retain call data unless the firm has approved that retention.

## Inspired By

This skill is generalized from Iron Noodle's legal automation work using Zapier MCP. Read the full story: [How an automation consultancy uses Zapier to rewire law firms in 9 days](https://zapier.com/blog/iron-noodle-mcp).
