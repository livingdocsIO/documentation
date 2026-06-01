---
name: review-trn
description: Review a Livingdocs Technical Release Note (TRN) against the canonical format, producing a numbered list of issues. Use this skill whenever the user wants to review a TRN, mentions "review release notes", "review TRN", "check release notes formatting", or asks to validate a specific release file (e.g. "review release-2026-05"). The skill is read-only by default — after presenting findings, it asks the user which (if any) to apply.
---

# Review TRN

A fixed-checklist review of a single TRN file against `.claude/trn-format-reference.md`. The review is **read-only** until the user authorises specific fixes. The skill outputs findings as a numbered list with file:line references, then asks the user to indicate which findings to act on.

Before reviewing, read `.claude/trn-format-reference.md` so the checks below stay aligned with the canonical contract.

## Step 1: Get the release handle

If the user hasn't specified one, ask: "Which release should I review? (e.g. `release-2026-07`)"

The TRN file lives at: `content/operations/releases/<release-handle>.md`

Read the entire file.

## Step 2: Run the checklist

Work through each check below in order. For each issue found, record:

- A short label (matches the check name).
- The file path and line number.
- A one-sentence description of the issue.
- A proposed fix (verbatim if possible, or a brief description if the fix needs judgment).

Skip checks that don't apply (e.g. if there's no Deprecations section because none exist).

### Check 1 — Top-level section structure

Confirm the following sections are present in this order:

```
## Webinar
## System Requirements
## Deployment
## Breaking Changes :fire:
## Deprecations :warning:
## Features :gift:
## Vulnerability Patches
## Patches
```

Sections may be empty (e.g. "No migrations are required") but should be present. Flag missing sections or sections out of order.

### Check 2 — Section heading icons

- `## Breaking Changes` must end with `:fire:`.
- `## Deprecations` must end with `:warning:`.
- `## Features` must end with `:gift:`.

Flag any section heading missing its expected icon.

### Check 3 — Entry heading icons

`###` headings inside Breaking Changes, Deprecations, and Features must **not** have icons (`:fire:`, `:warning:`, `:gift:`). The icon lives on the section heading only.

Flag any `###` heading inside these sections that carries an icon.

### Check 4 — Breaking Change / Deprecation entry structure

Every `###` entry under `## Breaking Changes :fire:` and `## Deprecations :warning:` must have:

- A prose intro of one or more paragraphs.
- A `#### Detect` sub-heading with content.
- A `#### Fix` sub-heading with content.

Flag any entry missing `Detect` or `Fix`, and flag any entry that has an `#### Applies to` sub-heading (this field was retired — its content belongs in the Detect line).

### Check 5 — Deprecation removal release

Every entry under `## Deprecations :warning:` must name a planned removal release in its prose intro (e.g. "will be removed in `release-2026-11`"), or explicitly state that no fixed removal release has been announced (typical for open-ended opt-in deprecations).

Flag any deprecation that does neither.

### Check 6 — Feature entry format

Every `###` entry under `## Features :gift:` must:

- Open its body with a bold tag: `**Automatic**`, `**Configurable**`, or `**Automatic / Configurable**`, followed by an em-dash and description.
- Be one short paragraph — no `####` sub-headings, no code blocks, no inline schema dumps.
- End with a link to a guide or reference page.

Flag any entry that:

- Is missing the leading tag, or uses a tag other than the three permitted forms.
- Has `####` sub-headings.
- Contains a code block (configs, schemas, JSON payloads).
- Has no outbound link.

### Check 7 — Tone

Scan Breaking Change and Deprecation entries for sentences that address an agent directly. Common patterns to flag:

- "Surface to the user…"
- "Do not auto-rewrite…"
- "This is not a mechanical rename…"
- "Ask the user before…"

These should be rephrased as plain advice describing the constraint or the decision a human reader must make.

### Check 8 — Anchor link integrity

Find every `{{< ref "..." >}}`, `{{< relref "..." >}}`, and `[...](#anchor)` link in the file. For each:

- Internal anchor links (`#...`): confirm the anchor exists as a heading slug on this page.
- Anchor links containing `-fire`, `-gift`, or `-warning` suffixes: flag as broken (these suffixes were retired when icons moved off entry headings).

Do not attempt to resolve `{{< ref >}}` links to other pages — verifying those is the docs build's job, not the review's.

### Check 9 — Patches section intro

The `## Patches` section's intro paragraph should state that patches are informational and that no explicit action is required per patch. Flag if the intro is missing, says only "Here is a list of all patches after the release has been announced", or otherwise doesn't make the informational contract clear.

### Check 10 — Heading icon-suffix anchors in inbound links

Grep the wider `content/` directory (not just this file) for anchor links targeting this release with `-fire`, `-gift`, or `-warning` suffixes. Flag each as a potentially-broken inbound link to fix.

Skip if the user explicitly says "review this file only — don't check inbound links from other files".

## Step 3: Present findings

Output the findings as a numbered list, grouped by check category:

```
Reviewed content/operations/releases/<release-handle>.md against the TRN format reference.

Found N issues:

**Structure**
1. <file>:<line> — <description>. Proposed fix: <verbatim or brief>.

**Icons**
2. <file>:<line> — <description>. Proposed fix: <verbatim or brief>.

... etc

No issues found in: <list of checks that passed>
```

If no issues were found, say so explicitly: "The TRN matches the canonical format. No issues to report."

## Step 4: Ask which to apply

After the findings list, ask:

> _"Which of these should I apply? You can say 'all', 'none', specific numbers (e.g. 'apply 1, 3, 5'), or describe a subset ('just the typos / icons / anchor fixes'). I'll only change the file once you tell me to."_

Wait for the user's response.

## Step 5: Apply requested fixes

For each issue the user authorised:

- If the fix is mechanical (verbatim string replacement), apply it.
- If the fix requires judgment, ask one clarifying question, then apply based on the user's answer.
- Skip any issue the user did not authorise.

After applying fixes, confirm what was done. Do not re-run the full review — just list the issues that were addressed.

## Constraints

- The skill is read-only until the user explicitly authorises fixes in Step 4.
- Never auto-fix anything during Step 2 — collect findings first, present, then act.
- Do not modify any file outside `content/operations/releases/<release-handle>.md` unless an inbound-link fix (Check 10) is explicitly authorised.
- Do not commit or push changes. The user runs `cleanup-trn` or makes their own commits when ready.
