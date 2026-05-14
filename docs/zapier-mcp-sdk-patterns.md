# Zapier MCP And SDK Patterns

Use Zapier MCP and Zapier SDK together, but do not use them for the same job.

## Rule Of Thumb

- Use **Zapier MCP** when a coding agent needs approved business context or a curated set of actions inside an AI client.
- Use **Zapier SDK** when the workflow needs code, state, retries, logs, schedules, loops, or production durability.
- Keep human approval before sends, public posts, CRM writes, tracker updates, or publishing.

## Zapier MCP Setup

Use this path when a skill needs live context or approved app actions.

1. Go to `https://mcp.zapier.com`.
2. Create a Zapier MCP server for the AI client you plan to use.
3. Add only the tools the skill needs, such as CRM reads, Drive search, Sheets lookup, Slack draft, Gmail draft, or tracker update.
4. Connect each app account through Zapier.
5. Test the agent with read-only or draft-only work first.
6. Add approval gates before any write, send, post, or publish action.

Reference: `https://docs.zapier.com/mcp/quickstart`

## Zapier SDK Setup

Use this path when the workflow should become repeatable or production-ready.

1. Install the SDK packages:

   ```bash
   npm install @zapier/zapier-sdk
   npm install -D @zapier/zapier-sdk-cli
   ```

2. Authenticate locally:

   ```bash
   npx zapier-sdk login
   ```

3. Use the CLI to discover apps, connections, and actions before writing workflow code.
4. Build the durable parts in code: intake, scheduling, state tracking, approval routing, retries, and logs.
5. Use SDK pre-built actions when governance matters. Treat direct API calls with extra caution because they may not have the same governance controls as pre-built actions.

References:

- `https://docs.zapier.com/sdk`
- `https://docs.zapier.com/sdk/using-the-cli`

## Common GTM Pattern

1. The skill defines the judgment workflow.
2. Zapier MCP gives the coding agent approved context and tools.
3. Zapier SDK turns recurring work into a durable workflow.
4. The workflow logs state and routes approvals.
5. A human approves external messages, CRM writes, customer-facing claims, and public publishing.

## What To Put In Each Skill

Each skill should name:

- Zapier MCP sources and actions.
- Zapier SDK jobs, if any.
- Recommended app connections.
- Approval gates.
- A first safe test.
