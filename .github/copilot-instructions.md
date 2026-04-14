# Project Coding Standards

## Scope
- This repository contains reusable skills, agent personas, references, and setup docs for coding agents.
- Prioritize clarity, actionability, and consistency over verbosity.

## Skills
- Every skill must live in `skills/<skill-name>/SKILL.md`.
- Use YAML frontmatter with both `name` and `description`.
- Description format: start with what the skill does, then include trigger conditions ("Use when...").
- Follow `docs/skill-anatomy.md` for structure and section ordering.
- Avoid duplicating content across skills; reference related skills or files in `references/`.

## Testing And Verification
- For changes to skill content, verify frontmatter and required sections are present.
- For changes to scripts, ensure examples and script paths in `SKILL.md` are accurate.
- For changes to setup docs, verify commands and paths are valid for the documented tool.

## Code Quality
- Review changes across correctness, readability, architecture, security, and performance.
- Keep edits focused; do not mix formatting-only changes with behavior or guidance changes.
- No secrets or credentials in files, docs, examples, or scripts.

## Implementation Workflow
- Work in small, verifiable increments.
- For bugs, capture expected behavior first and verify the fix against it.
- Keep docs synchronized with repository structure and real command usage.

## Boundaries
- Always: preserve existing conventions and validate links, paths, and file references.
- Ask first: adding new dependencies, changing repository-wide conventions, deleting skills.
- Never: commit secrets, remove safety guidance, or leave contradictory setup instructions.