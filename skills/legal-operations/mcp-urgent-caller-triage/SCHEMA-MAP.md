# Schema Map

Adapt these fields to the firm's approved phone, legal case management, and delivery systems. Keep the workflow read-first until the firm has explicitly approved writeback.

## Inputs

| Concept | Example source field | Notes |
| --- | --- | --- |
| Call ID | `call_id` | Stable identifier from the phone system. |
| Call timestamp | `started_at` | Use for recency and SLA calculations. |
| Caller phone | `caller_phone` | Use for matching; mask or omit in broad summaries. |
| Caller name | `caller_name` | May be extracted or matched from the case management system. |
| Transcript text | `transcript_text` | Treat as sensitive client communication. |
| Contact ID | `contact_id` | Matched legal client or prospect record. |
| Matter ID | `matter_id` | Use only approved open-matter metadata. |
| Matter status | `matter_status` | Keep in the legal system unless the destination is approved for the matter. |
| Next deadline | `next_deadline_at` | Use for sorting; broad summaries should use deadline category instead of exact dates. |
| Assigned owner | `assigned_owner` | Attorney, paralegal, intake owner, or support owner. |
| Billing flag | `billing_review_requested` | Use coarse flags only outside the approved billing or legal system. |
| Recent activity | `recent_activity_summary` | Summarize relevant touchpoints; avoid unnecessary detail. |

## Derived Fields

| Field | Allowed values | Notes |
| --- | --- | --- |
| `urgency_tier` | Critical, Urgent, Standard | Exactly one tier per call. |
| `urgency_reason` | Short text | Explain the evidence behind the tier. |
| `matched_signals` | List of phrases or concepts | Do not include excessive transcript excerpts. |
| `match_confidence` | High, Medium, Low | Use Low when caller identity or matter match is uncertain. |
| `recommended_next_step` | Callback, manual lookup, escalation, standard follow-up | Must remain human-reviewed. |

## Outputs

| Destination | Suggested fields |
| --- | --- |
| Slack or team chat | Tier, masked caller identifier, owner, SLA, neutral reason, secure source link, recommended next step. |
| Google Sheets | Timestamp, call ID, tier, owner, status, resolution timestamp, secure source link. |
| Email digest | Grouped Critical, Urgent, and Standard callbacks with masked identifiers and unresolved status. |

## Data Handling

- Use least-privilege scopes for every connected system.
- Mask or omit phone numbers, matter details, billing details, and transcript excerpts in broad summaries.
- Do not retain transcript text unless the firm has approved retention.
- Do not sync confidential matter details into channels that are not approved for that matter.
- Do not include invoice amounts, payment details, or billing dispute narratives outside approved billing or legal systems.
- Keep writeback off by default.
