# Setup Guide

## Prerequisites

- Zapier account with MCP enabled.
- Approved phone or VoIP system that can provide call transcripts.
- Approved legal case management system, such as Clio.
- Approved LLM connection.
- Approved delivery channel, such as Slack, email, or Google Sheets.

## Step 1: Enable Zapier MCP

1. Go to [mcp.zapier.com](https://mcp.zapier.com).
2. Enable MCP for the account that will run the workflow.
3. Add the MCP server URL to the approved agent harness.

## Step 2: Connect The Phone System

Add the approved phone or VoIP provider as a Zapier MCP connection.

Enable read-only access for:

| Input | Purpose |
| --- | --- |
| Call logs | Pull recent calls, timestamps, caller ID, and call IDs. |
| Transcripts | Retrieve transcript text for triage. |
| Caller metadata | Support matching across phone and legal case management systems. |

## Step 3: Connect Legal Case Management

Add Clio or the approved legal case management system as a Zapier MCP connection.

Enable the minimum read access needed for:

| Input | Purpose |
| --- | --- |
| Contact search | Match a caller to a client or prospect record. |
| Matter lookup | Find open matters, owners, status, and next deadlines. |
| Activity history | Show recent firm interactions relevant to the callback. |
| Billing flag | Add only a coarse flag such as "billing review requested" when the firm allows it. |

## Step 4: Configure The Delivery Channel

Choose where callback entries should land.

| Channel | Best for |
| --- | --- |
| Slack or team chat | Real-time review of Critical and Urgent calls. |
| Google Sheets | Dashboarding, resolution tracking, and KPI reporting. |
| Email | Digest-style callback summaries. |

Keep delivery destinations limited to authorized firm staff.

## Step 5: Add The Skill To The Agent Harness

1. Copy `SKILL.md` into the harness skill directory.
2. Copy `ONBOARDING-PROMPT.md` into the system prompt or runbook.
3. Adapt `SCHEMA-MAP.md` to the firm's field names and approved systems.
4. Add the Zapier MCP server to the harness configuration.

## Step 6: Tune Urgency Signals

Start with this structure and adapt it to the firm's practice areas:

```yaml
critical_signals:
  - filing deadline
  - court date within 48 hours
  - opposing counsel deadline
  - safety concern
  - client threatening to leave

urgent_signals:
  - billing dispute
  - repeated unreturned calls
  - frustrated language
  - escalation request
  - time-sensitive filing

standard_signals:
  - status check
  - scheduling
  - document request
  - general question
```

Practice areas may need custom signals for custody hearings, settlement expirations, plea deadlines, visa expirations, probate deadlines, contract deadlines, or regulatory filings.

## Step 7: Test Before Live Use

Use approved sample transcripts or synthetic data first.

Test at least:

- A deadline-driven Critical call.
- A frustrated repeat caller.
- A routine status check.
- An unmatched caller.
- A caller with multiple open matters.

Review false positives and false negatives with the team before enabling live alerts.

## Optional Extensions

| Connection | What it enables |
| --- | --- |
| Calendar | Check owner availability before assigning callbacks. |
| Billing system | Add coarse billing-review flags; keep invoice amounts, payment details, and dispute narratives inside approved billing or legal systems. |
| Google Sheets | Track callback resolution, response time, and repeat callers. |
| Zapier SDK | Run scheduled polling, retries, logging, and durable delivery. |
