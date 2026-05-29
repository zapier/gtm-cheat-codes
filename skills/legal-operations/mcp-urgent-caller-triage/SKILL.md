---
name: mcp-urgent-caller-triage
description: Prioritize inbound client calls by reading transcripts, classifying urgency, matching callers to legal client and matter context, and preparing a callback list for human review.
---

# MCP Urgent Caller Triage For Law Firms

Use this skill when a law firm needs to identify which inbound callers need attention first and give the callback owner context before they call back.

## Workflow

1. Accept a call transcript, call ID, or recent call-log request.
2. Pull transcript and caller metadata through Zapier MCP from the approved phone or VoIP system.
3. Classify the call into exactly one tier: Critical, Urgent, or Standard.
4. Match the caller to the approved legal case management system, such as Clio.
5. Gather context needed for a callback: secure source link, urgency evidence, assigned owner, next deadline category, and coarse status flags when approved.
6. Create a prioritized callback entry for the approved delivery channel, such as Slack, email, or Google Sheets.
7. Draft client-facing language only when an authorized firm user explicitly asks.

## Urgency Model

| Tier | Signals | Response target |
| --- | --- | --- |
| Critical | Court date or filing deadline within 48 hours, opposing counsel deadline, safety concern, client threatening to leave | Immediate review |
| Urgent | Billing dispute, repeated unreturned calls, frustrated language, time-sensitive filing, escalation request | Same-day review |
| Standard | Status check, document request, scheduling, general question | Next-business-day review |

Tune the signal list by practice area. Family law, personal injury, criminal defense, immigration, estate planning, and business law teams will each need different examples and thresholds.

## Zapier MCP And SDK Role

- Use Zapier MCP to read call logs, transcripts, caller metadata, legal client records, matter context, approved activity history, and delivery-channel destinations.
- Use Zapier SDK only if the workflow becomes durable automation, such as scheduled transcript polling, callback dashboard updates, alert routing, retry handling, KPI logging, or resolution tracking.
- Keep callbacks, client-facing messages, legal record updates, billing changes, and broad alerts human-approved.

## Output Format

For each flagged call, return the minimum useful callback entry by default:

```text
[Tier] - <Masked Caller Identifier>
Call ID: <Call ID or secure source link>
Reason: <Neutral reason this call was flagged>
Deadline category: <Immediate, same day, next business day, or none found>
Owner: <Assigned attorney or staff owner>
Recommended next step: <Callback, manual lookup, escalation, or standard follow-up>
```

Include full phone numbers, matter names, matter status, billing details, transcript excerpts, or deadline specifics only inside approved legal systems or access-controlled firm channels where that level of detail is explicitly required. Use billing context only as a coarse flag such as "billing review requested"; do not include invoice amounts, payment details, or dispute narratives in broad callback summaries.

Critical calls should appear first. Within each tier, sort by deadline proximity, then by repeat-caller count.

## Guardrails

- Do not call clients automatically.
- Do not send client-facing messages unless an authorized firm user explicitly asks.
- Do not modify legal case management records unless the approved workflow explicitly requires it.
- Do not expose confidential matter details outside approved firm channels.
- Do not store transcripts beyond the working session unless the approved workflow requires retention.
- If a caller cannot be matched, mark the entry as "Unmatched - manual lookup needed" and still classify urgency.
- Do not invent deadlines, case status, billing details, or caller identity.
- When confidence is low, state the uncertainty and the evidence needed for review.

## Inspired By

This skill is generalized from Iron Noodle's legal automation work using Zapier MCP. Read the full story: [How an automation consultancy uses Zapier to rewire law firms in 9 days](https://zapier.com/blog/iron-noodle-mcp).
