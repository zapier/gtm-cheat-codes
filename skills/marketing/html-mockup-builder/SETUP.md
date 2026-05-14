# Setup: HTML Mockup Builder

## Required Systems

- Design system docs
- Google Docs
- Asset library

## Zapier MCP Setup

1. Create a Zapier MCP server at `https://mcp.zapier.com`.
2. Add only the Zapier MCP tools needed for the systems above.
3. Connect each app account through Zapier.
4. Test with read-only or draft-only work before enabling writes.
5. Keep sends, posts, CRM writes, tracker updates, and publishing approval-gated.

## Zapier SDK Setup

Use Zapier SDK when this workflow needs code, state, schedules, retries, logs, or repeatable execution. Start with `npx zapier-sdk login`, then use the SDK CLI to discover apps, connections, and actions before writing workflow code. Prefer SDK pre-built actions when governance matters.

## First Safe Test

Run the skill on a sanitized example. Confirm source links, assumptions, owner fields, approval gates, and output quality before using real customer or prospect data.
