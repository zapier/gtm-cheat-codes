# Install Zapier

The front-door skill. A person says "install Zapier" and the agent walks them through connecting the right Zapier surface for what they want to do.

## What It Does

Most people do not know whether they need Zapier MCP, the SDK, or the CLI. This skill removes that decision. The agent asks what the person wants to do, picks the path, and walks them through install and auth one step at a time.

## Paths It Routes To

- **Zapier MCP:** connect apps to an AI client (Claude, ChatGPT, Cursor), no code.
- **Zapier SDK:** build apps and agents in code with durable workflows.
- **Zapier CLI:** drive Zapier from the terminal; standalone install that bundles the SDK.

App connectors are separate: per-app integration skills a person installs for a specific app, not an install path for Zapier itself. See `INSTALL-PATHS.md`.

## Files

- `SKILL.md`: the router and the agent instructions.
- `INSTALL-PATHS.md`: step-by-step install and verify for each path.
- `metadata.yaml`: registry metadata.

## How To Use It

Install per `templates/install-template.md`, then tell your agent "install Zapier."
