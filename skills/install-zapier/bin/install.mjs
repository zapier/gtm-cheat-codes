#!/usr/bin/env node
// Vendored skill: this package IS the content. By default it prints the
// install-zapier skill so the agent reading stdout can act on it now.
// Optional `--save [dir]` writes the skill files to a directory the caller
// names. No harness detection, no installer logic. That is by design.

import { readFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const pkgRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const FILES = ["SKILL.md", "INSTALL-PATHS.md"];

const args = process.argv.slice(2);
const saveIdx = args.findIndex((a) => a === "--save");

if (saveIdx !== -1) {
  // Plain copy to a caller-named dir. Defaults to ./install-zapier in cwd.
  const target = args[saveIdx + 1] && !args[saveIdx + 1].startsWith("-")
    ? resolve(process.cwd(), args[saveIdx + 1])
    : resolve(process.cwd(), "install-zapier");
  mkdirSync(target, { recursive: true });
  for (const f of FILES) copyFileSync(join(pkgRoot, f), join(target, f));
  process.stdout.write(`Saved the install-zapier skill to ${target}\n`);
  process.stdout.write(`Place it in your agent's skills directory to have it auto-trigger.\n`);
  process.exit(0);
}

// Default: print the skill to stdout for the agent to read and act on now.
const skill = readFileSync(join(pkgRoot, "SKILL.md"), "utf8");
const paths = readFileSync(join(pkgRoot, "INSTALL-PATHS.md"), "utf8");

process.stdout.write(skill.trimEnd() + "\n\n");
process.stdout.write("---\n\n");
process.stdout.write(paths.trimEnd() + "\n\n");
process.stdout.write(
  "---\n" +
  "To keep this skill so it auto-triggers later, re-run with `--save <your-skills-dir>`.\n"
);
