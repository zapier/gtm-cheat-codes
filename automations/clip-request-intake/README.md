# Clip Request Intake

## Use When

Use this when content, social, comms, or events teams need a clean way to request a clip from a recording.

## What It Does

Collects source recording, target quote, approval owner, and destination for a clip request.

## Status

Automation spec. Review, adapt, and test before enabling.

## Trigger

New clip request form, chat request, or tracker row.

## Inputs

- Source recording
- Target moment
- Requester
- Approval owner
- Intended destination

## Outputs

- Validated request
- Tracker row
- Approval route

## Zapier MCP Role

Use Zapier MCP to read request details, source recording context, calendar context, and approval owner data.

## Zapier SDK Fit

Use Zapier SDK for request intake, validation, tracker creation, routing, and logs.

## Approval Gates

- Do not download restricted recordings without approval.
- Do not create external-use tasks until usage rights are clear.
- Do not write tracker state unless the run contract explicitly allows it.
