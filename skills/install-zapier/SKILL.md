---
name: install-zapier
description: Walk a person through installing and connecting Zapier, choosing the right path (MCP, SDK, CLI, or Connectors) for what they want to do. Use when someone says "install Zapier", "add Zapier", "connect Zapier", or "set up Zapier".
---

# Install Zapier

Use this skill when a person says "install Zapier" and may not know which Zapier surface they need. Do not make them pick a product. Ask what they want to do, then walk them through the right path one step at a time.

## Step 1: Find The Right Path

Ask one or two plain questions, then map the answer.

| What they want | Path | Why |
|---|---|---|
| Claude, ChatGPT, or Cursor to use their apps now | Zapier MCP | Connect tools to an AI client, no code |
| To build an app or agent in code | Zapier SDK | Call Zapier as a library: code, state, retries, schedules |
| To drive Zapier from the terminal | Zapier CLI | Standalone global install; bundles the SDK |
| Not sure | Start with Zapier MCP | Fastest path to a working agent |

The SDK and CLI are separate installs. Pick the SDK for a code project, the CLI for terminal-only work. If they want an AI client now and durable workflows later, set up MCP first, then the SDK.

## App Connectors

These three paths are how a person installs Zapier itself. Individual app connectors are a separate thing: per-app integration skills (for example Notion) that a person installs when they need a specific app. Point them to those only after the core install, and only for the app they named. See the note at the end of `INSTALL-PATHS.md`.

## Step 2: Walk The Chosen Path

Open `INSTALL-PATHS.md` and follow the section for the chosen path. Do one step at a time. Confirm each step worked before moving to the next.

## Step 3: Verify

Run the verify check at the end of the chosen path section before telling the person they are done. Confirm the connection works with a read-only or draft-only action first.

## Guardrails

- Never have the person paste API keys or tokens into chat. Use the auth flows linked in each path.
- Use least-privilege. Add only the tools the person actually needs.
- Keep human approval before any send, post, CRM write, or publish.
