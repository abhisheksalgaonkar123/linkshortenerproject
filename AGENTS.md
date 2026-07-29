ALWAYS refer to .md file before generating any code:

> ## ⚠️ MANDATORY: Read `/docs` before writing any code
>
> Before generating, editing, or suggesting **any** code, you MUST first read the relevant individual instruction files inside the [docs/](docs) directory (see the Documentation map below). This is not optional guidance — it is a hard requirement:
>
> - Identify which doc(s) apply to the area you are touching (auth, UI, architecture, coding standards, workflow, etc.).
> - Open and read the full contents of each applicable doc **before** writing a single line of code.
> - If a relevant doc does not exist yet, say so explicitly instead of skipping the check.
> - Never rely on assumptions or prior context in place of reading the current doc contents — files may have changed.

# Agent Instructions for Link Shortener Project

This repository is a Next.js app for a link shortener with Clerk authentication, Drizzle ORM, and Tailwind-based UI components. Agents working in this codebase should prioritize clarity, consistency, and minimal changes.

## Primary role

You are expected to help implement or refine features while preserving the existing architecture and developer experience. Favor practical, production-ready code over clever abstractions.

## Project context

- Framework: Next.js with the App Router
- UI: React, Tailwind CSS, and reusable UI primitives
- Auth: Clerk
- Data layer: Drizzle ORM
- Language: TypeScript

## Core expectations

- Preserve the existing project structure and keep changes focused on the request.
- Match the style already present in the repository instead of introducing new patterns.
- Prefer simple, readable TypeScript over over-engineered solutions.
- Reuse existing utilities and components before creating new ones.
- Avoid adding dependencies unless there is a strong and justified need.

## What to do before changing code

1. **Read the applicable file(s) in `docs/` first** — this must happen before any code is written, every time, with no exceptions.
2. Read the relevant existing source files before editing.
3. Understand whether the request affects the app layer, UI, database layer, or shared utilities.
4. Keep the scope narrow and avoid unrelated refactors.
5. Preserve current behavior unless the task explicitly calls for a change.

## Coding standards

- Use strict TypeScript and keep types explicit.
- Avoid `any` unless there is no reasonable alternative.
- Use descriptive names for variables, functions, and components.
- Keep functions small and focused on a single responsibility.
- Use the shared `cn()` helper from `lib/utils.ts` when combining Tailwind class names.
- Prefer existing UI primitives in `components/ui/` before building new ones.
- Keep styling consistent with the current minimalist Tailwind design system.

## Architecture guidance

- Route pages should live in `app/` and stay focused on composition and flow.
- Reusable UI should live in `components/`.
- Shared helpers and utilities should live in `lib/`.
- Database schema and connection logic should stay in `db/`.
- Use the `@/*` path alias for local imports.

## Authentication and data layer expectations

- Respect the existing Clerk-based authentication setup.
- Do not hardcode secrets or environment-specific values.
- Keep Drizzle schema and query logic consistent with the current structure.
- If a data change is required, make the schema and usage changes together.

## Workflow expectations

- Make small, reviewable changes.
- Do not rewrite large sections of the codebase unless the task requires it.
- If you are unsure about the right place for a change, inspect the surrounding files first.
- When handing off work, clearly summarize what changed and why.

## Validation requirements

- Run `npm run lint` after code changes.
- Run `npm run build` when the change affects UI rendering, routing, app behavior, or shared logic.
- If the change affects authentication or database logic, verify the result carefully and mention any limitations.

## Documentation map

Read the applicable file(s) below in full before generating any code. If a request touches more than one area (e.g. UI + auth), read all applicable docs, not just one.

- [docs/agent-authentication.md](docs/agent-authentication.md) — required Clerk-based authentication rules and route behavior
- [docs/agent-coding-standards.md](docs/agent-coding-standards.md) — coding conventions and implementation rules
- [docs/agent-architecture.md](docs/agent-architecture.md) — project structure and where new code should live
- [docs/agent-workflow.md](docs/agent-workflow.md) — validation and change-management workflow
- [docs/agent-ui-components.md](docs/agent-ui-components.md) — required shadcn ui-only rules for all UI elements

## Do not

- Do not add unnecessary dependencies.
- Do not introduce unrelated refactors.
- Do not make broad design changes without a clear need.
- Do not ignore existing patterns in favor of personal preference.
