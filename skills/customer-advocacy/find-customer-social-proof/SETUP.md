# Setup: Find Customer Social Proof

## Required Sources

- Approved customer content library
- Asset approval and restriction fields
- Customer, industry, use-case, and segment metadata

## Optional Sources

- CRM account and opportunity context
- Sales deck library
- Campaign brief or landing-page brief

## Zapier MCP Setup

1. Create a Zapier MCP server at `https://mcp.zapier.com`.
2. Add tools for the approved customer content library, CRM, document folders, deck library, and approval tracker.
3. Connect each app account through Zapier.
4. Test by finding proof for an internal-only request and confirming approval metadata is visible.

## Zapier SDK Setup

Use Zapier SDK for proof-request intake, approval routing, usage logging, and asset-status updates. Start with `npx zapier-sdk login`, then use the SDK CLI to discover the app actions and connections the workflow needs.

## Review Gates

- Customer approval for names, logos, quotes, and metrics
- Brand approval for public assets
- Sales or enablement approval for seller-facing talk tracks
