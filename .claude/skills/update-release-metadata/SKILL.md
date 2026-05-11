---
name: update-release-metadata
description: Prepares a GitHub PR to update Livingdocs release metadata on announcement day. Use this skill when the user mentions updating release metadata, announcement day, a release going live, or wants to prepare the metadata PR for a new release (e.g. "release-2026-05 is being announced today", "update the release metadata", "prepare announcement day PR"). This skill handles the full git workflow: branch creation, file edits, commit, push, and PR creation.
---

# Update Release Metadata

On announcement day, the release state machine needs to advance: a new release moves from `upcoming` to `current`, the previous current becomes `maintained`, and the oldest maintained becomes `legacy`. This skill handles all the file edits and git workflow.

## Step 1: Identify the release

If the user hasn't specified a release handle, ask them: "Which release are we announcing? (e.g. `release-2026-05`)"

Then read `data/releases.json` from the repo root and identify the three releases that will change:

- **New release** (becoming current): The named entry (not the `main` key) matching the user's release handle. It should have `upcoming: true`.
- **Previous current** (becoming just maintained): The entry with `current: true`.
- **Oldest maintained** (becoming legacy): Among entries where `maintained: true`, `current: false`, and `legacy: false`, pick the one with the lowest `sortId`.

Confirm with the user before making any changes:

> "I'll update these three releases:
>
> - **`<new-release>`**: upcoming → current
> - **`<prev-current>`**: current → maintained (no longer current)
> - **`<oldest-maintained>`**: maintained → legacy
>
> Looks right?"

## Step 2: Create the branch

Run from the documentation repo root:

```bash
git checkout main
git pull origin main
git checkout -b update-release-metadata/<release-handle>
```

## Step 3: Apply the metadata changes

Four files need updating. Make all changes precisely — only modify the metadata fields listed below, nothing else.

### New release markdown file

**File:** `content/operations/releases/<new-release>.md`

In the YAML frontmatter at the top:
| Field | Before | After |
|-------|--------|-------|
| `excludeFromSearch` | `true` | `false` |
| `upcoming` | `true` | `false` |
| `current` | `false` | `true` |
| `maintained` | `false` | `true` |

The `header:` block will look like this after the change:

```yaml
header:
  upcoming: false
  legacy: false
  current: true
  maintained: true
```

### Previous current release markdown file

**File:** `content/operations/releases/<prev-current>.md`

| Field     | Before | After   |
| --------- | ------ | ------- |
| `current` | `true` | `false` |

Only this one field changes. `maintained` stays `true`.

### Oldest maintained release markdown file

**File:** `content/operations/releases/<oldest-maintained>.md`

| Field        | Before  | After   |
| ------------ | ------- | ------- |
| `maintained` | `true`  | `false` |
| `legacy`     | `false` | `true`  |

### data/releases.json

Apply the same logical changes for all three releases in their respective JSON objects (matched by `key`):

**New release entry:**

```json
"upcoming": false,
"current": true,
"maintained": true,
```

**Previous current entry:**

```json
"current": false,
```

(`maintained` stays `true`)

**Oldest maintained entry:**

```json
"maintained": false,
"legacy": true,
```

## Step 4: Commit

Stage only the four files you changed:

```bash
git add content/operations/releases/<new-release>.md
git add content/operations/releases/<prev-current>.md
git add content/operations/releases/<oldest-maintained>.md
git add data/releases.json
git commit -m "fix(<release-handle>): add new release metadata for release announcement day"
```

The `fix(<release-handle>):` semantic prefix `fix` is required — without it, no deployment is triggered. The release-handle is only needed for better readability.

## Step 5: Push and create the PR

```bash
git push -u origin update-release-metadata/<release-handle>
```

Then create the PR (use `gh pr create` or the GitHub MCP):

- **Title:** `<release-handle>: Update release metadata`
- **Base branch:** `main`
- **Body:**

```
### Motivation

Update release metadata for new <release-handle> and old ones accordingly.

*Note: Only merge on announcement day*
```

Return the PR URL to the user.
