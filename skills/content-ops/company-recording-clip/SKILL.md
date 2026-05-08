---
name: company-recording-clip
description: Turn a company meeting or event recording into a short, approved, postable clip.
---

# Company Recording To Postable Clip

Use this skill when a content, social, comms, or events team needs an agent to find a source recording, locate a spoken moment, and produce a short clip.

## Workflow

1. Recover the real source recording from chat or collaboration tools, Drive, calendar context, or a user-provided link.
2. Download the source recording and captions when permitted.
3. Search captions for names and fuzzy phrases.
4. Run word-level transcription around the likely moment.
5. Cut with FFmpeg using word-boundary timing.
6. Optionally create a designed HyperFrames version.
7. Route the clip for human approval before publishing or sharing broadly.

## Zapier MCP/SDK Role

Zapier does not need to perform the media render. Use Zapier primitives for source discovery, context grounding, approval routing, tracker logging, and distribution handoff.

## Guardrails

- Confirm permission to download and edit the recording.
- Do not publish clips without approval.
- Keep company meeting references sanitized in examples.
