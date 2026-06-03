# Install Paths

Three ways to install Zapier: MCP, SDK, or CLI. Pick one with the person using the table in `SKILL.md`, then follow only that section. App connectors are covered separately at the end.

For the deeper MCP-versus-SDK rationale, see `docs/zapier-mcp-sdk-patterns.md`.

## Zapier MCP

Use when someone wants an AI client (Claude, ChatGPT, Cursor) to use their connected apps without writing code.

1. Go to `https://mcp.zapier.com`.
2. Create an MCP server for the AI client they use.
3. Add only the tools the task needs, such as CRM reads, Drive search, Slack draft, or Gmail draft.
4. Connect each app account through Zapier.
5. Copy the server URL into the AI client's MCP settings.

**Verify:** ask the client to run one read-only action, such as "find my last 3 emails." Confirm it returns real data.

References: `https://docs.zapier.com/mcp/quickstart`, `https://github.com/zapier/zapier-mcp`

## Zapier SDK

Use when the person is writing code: an app, agent, or backend that calls Zapier as a library.

1. Install the packages:

   ```bash
   npm install @zapier/zapier-sdk
   npm install -D @zapier/zapier-sdk-cli @types/node typescript
   ```

2. Authenticate:

   ```bash
   npx zapier-sdk login
   ```

3. Make a call:

   ```typescript
   import { createZapierSdk } from "@zapier/zapier-sdk";

   const zapier = createZapierSdk();
   const { data: connection } = await zapier.findFirstConnection({ app: "slack", owner: "me" });
   ```

4. Discover capabilities at runtime with `listApps`, `listActions`, `getActionInputFieldsSchema`. Do not guess method names.

**Shortcut:** in a skills-aware harness, run `npx skills add zapier/sdk` to install the SDK's own skill.

**Verify:** run the call above and confirm it returns a real connection.

References: `https://docs.zapier.com/sdk`, `https://docs.zapier.com/sdk/reference`

## Zapier CLI

Use when the person wants to drive Zapier from the terminal without setting up a code project. The CLI is a standalone package that bundles the SDK, so this is a self-contained install.

1. Install globally:

   ```bash
   npm install -g @zapier/zapier-sdk-cli
   ```

2. Authenticate:

   ```bash
   zapier-sdk login
   ```

3. Use it to check the profile, list connections, and discover apps and actions:

   ```bash
   zapier-sdk get-profile
   zapier-sdk list-connections
   ```

**Verify:** run `zapier-sdk --help` and confirm the command list prints.

Reference: `https://docs.zapier.com/sdk/cli-reference`

## App Connectors (Separate, Per App)

App connectors are not an install path for Zapier itself. They are individual per-app integration skills in `https://github.com/zapier/connectors`, one per app, each shipping its own `SKILL.md`. A person installs a connector only when they need a specific app integration.

Point someone to a connector after the core install above, and only for the app they named. Install that app's connector skill from the connectors repo (for example `apps/notion`). The connector's own `SKILL.md` carries its install, auth, and usage steps.

Connectors are currently **experimental** (Elastic License 2.0) and not recommended for production.

Reference: `https://github.com/zapier/connectors`
