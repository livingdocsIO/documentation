---
name: document-feature
description: Document a new Livingdocs feature end-to-end — update the reference/guide documentation (the source of truth) with full config and API details, then write the high-level Feature section entry for the Technical Release Note (TRN) that links to it. Use this skill whenever a developer wants to document a new feature, asks to write or add a TRN entry, mentions "write feature section", "add a feature to the release notes", "document this feature", or provides PR URLs and asks to document a feature for a specific release (e.g. "write the TRN entry for release-2026-05"). This skill handles the full workflow: gathering PR details, Notion requirements, and screenshots; updating the documentation with all config options; writing the TRN entry in the right tone and format; and inserting it into the release file.
---

# Document a Feature (Docs + TRN)

The **documentation is the source of truth**. When a feature adds or changes configuration, API, or workflow, the full details belong in the reference/guide docs. The TRN entry stays high-level and links to that documentation.

Workflow order: gather inputs → read sources → **update the documentation first** → write the TRN entry that links to it → confirm → insert into the release file.

## Step 1: Gather inputs

Ask **one question at a time** — wait for each answer before asking the next:

1. **Release** — identifier in `release-YYYY-MM` format. Accept plain year/month and normalize it yourself.
2. **GitHub PR URLs** — ask whether they'd like to add all URLs at once or one at a time. If one at a time: ask for the first URL, then ask "Any more PRs? (say 'done' to continue)" and keep collecting until done. If all at once: accept a list of URLs in a single message.
3. **Notion requirement URL** — original requirement page (if available)
4. **Cycle Demo Presentation** — a Figma Slides URL (see Step 2 for how it's read). Prefer a **node-specific** link: in Figma, select the relevant slide → Copy link → the URL contains `node-id=...`, which lets a single slide be read at full resolution. A plain deck URL works too. Say "no" to skip.
5. **Additional context** — free-form notes, summaries, or exclusions (e.g. "ignore PR #123"). Optional.
6. **Screenshots or Images** — ask the developer to paste images (`Cmd+V` / `Ctrl+V`). For each: ask for the filename (`release-YYYY-MM-description.png`) and a short description of what is shown. Say "no" to skip.
7. **Existing documentation** — path(s) to any existing `/reference/` or `/guides/` pages this feature relates to, if the developer knows them. Say "no" and the skill will search for the right page(s) in Step 3.

## Step 2: Read the sources

- Fetch each GitHub PR: title, description, linked issues — understand what was built and why.
- If a Notion URL was provided, fetch it to understand the original user requirement.
- If a Figma Slides URL was provided, read the deck to understand how the feature was positioned (see **Reading a Figma Slides deck** below).
- Place each image after the paragraph it best illustrates, using the developer's description to decide.

### Reading a Figma Slides deck

Only the Figma MCP `get_screenshot` tool works on Slides — `get_design_context` and `get_metadata` are rejected for Slides files, so there is no text/node-tree extraction. Read via screenshots:

- **Node-specific link** (`node-id=X-Y` in the URL): screenshot that node directly at `maxDimension` ~2048. This is the ideal case — one crisp slide, no cropping.
- **Plain deck URL** (no `node-id`): the page node is `0:1`. First screenshot `0:1` at a high `maxDimension` (e.g. 8000) for an overview — rows are sections, columns are slides within a section — then crop the relevant region to read it. `maxDimension` defaults to 1024, which is too small for a full deck; always raise it.
- The tool returns a short-lived asset URL; download it (`curl`) and read the PNG. For a large deck, crop with Pillow/`sips` rather than reading the whole canvas at once.
- If only a deck URL is available and a slide is still unreadable after cropping, ask the developer for a node-specific link to that slide.

## Step 3: Update the documentation (source of truth)

Do this **before** writing the TRN entry. The docs hold the complete, lasting details; the TRN only announces the change and links here.

### 3a. Decide what to document

Judge per feature what the change actually introduces:

- **Configuration or API change** (new/changed project-config property, plugin option, API parameter, server hook, CLI flag) → belongs in **reference** under `content/reference/`. Document _every_ option: name, type, default, allowed values, and a minimal example.
- **Public API change** (a new/changed HTTP endpoint, parameter, or response on the external REST API) → does **not** live under `content/reference/`. Handle both places:
  - **Endpoint docs**: `data/endpoints/<endpoint>.yaml`. All variants of one endpoint share the same `endpointId`. Each carries `apiVersionConstraints` and a `history:` array; a new change adds a `history:` entry at the **top** of the array with `release:` and a very brief `description:`.
    - **`apiVersionConstraints`** uses `gte` / `lte` for dated version windows and `eq` for named versions (`eq: v1`, `eq: beta`). The **current** doc uses `gte` alone (open upper bound) and has no file-name suffix. A frozen doc's file-name suffix matches its **upper bound**: `lte` for a dated window (e.g. `get-latest-publication-2025-07.yaml` → `lte: 2025-07`) or the named version for `eq` (e.g. `-v1`, `-beta`). Named-version docs may also carry a `deprecation:` block.
    - **Change scoped to a new API version** (not applied to earlier versions) → freeze the old shape and create the new one:
      1. Copy the current unsuffixed file to a version-suffixed name using the **last API version before the change** (e.g. `get-categories-2025-11.yaml`), and set `apiVersionConstraints.lte` to that version. This file keeps the pre-change docs.
      2. In the unsuffixed file, set `apiVersionConstraints.gte` to the version the change was introduced in, apply the change (`parameters`, `description`, `query`), and add the new `history:` entry at the top.
    - **Change applies to all API versions** → no new document. Add the new `history:` entry at the top of **every** existing file for that endpoint (unsuffixed plus each version-suffixed and named variant). Word each entry to describe what that version actually does — the same release can read differently per version (e.g. "deprecated, logs a warning" in an older window vs "removed, returns an error" in the current one).
  - **Changelog**: add a `type: changelog-entry` markdown file under `content/reference/public-api/changelog/YYYY-MM/` (one folder per release). Set `change.date` (`YYYY-MM`) and `change.type` (`feature`, `deprecation`, or `breaking`), and link to the endpoint doc. Bug fixes are not listed here.
- **New workflow or capability an editor/integrator uses** (setup steps, a task walkthrough, an end-to-end how-to) → belongs in a **guide** under `content/guides/`.
- **Both** — many features need reference (the options) _and_ a guide (how to use them). Update both.
- **Neither** — a pure UI polish with no config, API, or new workflow (e.g. a modal made wider) may have nothing to document beyond the TRN. If so, say so explicitly and skip to Step 4 — don't invent doc changes.

### 3b. Locate the target page

For each area to document:

1. If the developer gave existing paths in Step 1, start there.
2. Otherwise search `content/reference/` and `content/guides/` for the closest related topic (grep for the feature's config handle, plugin name, or domain terms). For a **Public API** change, the endpoint docs live in `data/endpoints/*.yaml` (grep there by path or `endpointId`), not under `content/reference/`.
3. **Extend an existing page** when the feature fits an established topic — this is the default; keep related config in one place.
4. **Create a new page** only when no existing page fits. Place it in the right section and add correct frontmatter:
   - Reference: `title`, `weight`, and `menus:` → `reference:` → `parent: <Section>` (match sibling pages).
   - Guide: `title`, optional `bullets:` (list of what the guide covers), `weight`.

### 3c. Draft the documentation

- Be **comprehensive** — unlike the TRN, docs list all options, defaults, edge cases, and full code examples. "Be comprehensive, i.e. don't leave out stuff that would frustrate people following your guide."
- Follow the repo conventions in `README.md`: start sections at `##`, `###` for subsections; brief, concise prose; `js`/`json`/`yaml` code blocks.
- Mark new additions with `{{< added-in "release-YYYY-MM" >}}` (add `block` for a standalone line, e.g. `{{< added-in "release-YYYY-MM" block >}}` at the top of a new page or section).
- Cross-link related pages with `{{< ref "/path" >}}`.
- If screenshots/images illustrate a workflow, reference them with `{{< img >}}` and follow the image reminder in Step 6.

### 3d. Confirm, then write

Show the developer the planned doc changes — which page(s), extend-vs-new, and the drafted content. Ask: _"Does this documentation look right before I write it?"_ Apply changes, then write the files with the editing tools. Note the final doc path(s); the TRN entry links to them in Step 4.

## Step 4: Write the TRN feature entry

The TRN entry is the high-level announcement — value and excitement, not the full option list. It **links to the documentation** written in Step 3.

Use this format:

```
### FEATURE NAME

INTRO_PARAGRAPH

[CONFIG_OR_API_SECTION if activation/config is required]

[{{< img src="FILENAME" alt="ALT TEXT" width="600" >}} if screenshot provided]

[{{< info >}}...{{< /info >}} if there's a prerequisite or important note]

[For more information, see the [LABEL]({{< ref "/path/to/doc" >}}) documentation.]
```

### Calibration examples

Use these two examples to calibrate tone and structure:

**Example 1 - Simple (auto-available, no config):**

```markdown
### Optimized Media Library Modal

We've optimized the image selection modal to display more images by increasing its width. The modal now shows up to 6 images per row (depending on screen size), compared to the previous layout. This makes better use of available screen space.

For more information, see the [Media Library]({{< ref "/guides/media-library" >}}) documentation.
```

**Example 2 - Complex (sub-sections, config, before/after):**

```markdown
### Distribution Dates UI Improvements

Editors use the planning board to manage articles scheduled for publishing and distribution. Setting distribution dates quickly and accurately is essential for efficient workflow management.

Previously, the workflow required selecting a date from the date picker and then pressing a green confirmation button - an extra step that caused confusion.

#### Quick Action Buttons

When adding a distribution date, editors now see three quick action buttons instead of an empty date picker:

- **Today**: Sets the distribution date to today at 12:00 (noon)
- **Tomorrow**: Sets the distribution date to tomorrow at 12:00 (noon)
- **Other date**: Opens the date picker for selecting a different date

#### Auto-Save Functionality

Valid dates are now automatically saved as soon as they are selected - no confirmation button required.

#### Date-Only Precision Configuration

A new optional configuration property `precision` allows you to configure whether editors should enter dates with or without time:

    {
      handle: 'distributionDates',
      type: 'li-distribution-dates',
      ui: {
        config: {
          precision: 'date' // Options: 'datetime' (default) or 'date'
        }
      }
    }

For more information, see the [Distribution Dates]({{< ref "reference/document/metadata/plugins/li-distribution-dates.md " >}}) documentation.
```

### Writing guidelines

#### Content & structure

- **Lead with user value**: open with what users can now do. Focus on benefit, not implementation.
- **High-level intro**: one short paragraph — no implementation details. Link to docs instead of repeating them.
- **Activation status**: always state whether auto-available or requires config. If unclear, ask the developer — getting this wrong misleads customers.
- **Config/API blocks**: only if config is required to activate the feature. Show only the diff — the full option list lives in the documentation from Step 3. Use `js` or `json` code blocks.
- **Always link to the docs**: end with a "For more information, see the [LABEL]({{< ref "/path" >}}) documentation." line pointing to the page(s) written/updated in Step 3, unless the feature had nothing to document.
- **Before/after**: include if the feature changes existing familiar behavior.
- **Lifecycle context**: if the feature replaces something deprecated, say so briefly.
- **Complex topics**: add _"Reach out to your customer solutions contact for help getting started."_ if setup is non-trivial.
- **Sub-sections**: use `####` headings for multiple distinct sub-features or steps.
- **Links**: `{{< ref "/path" >}}` for internal docs. `{{< release "release-YYYY-MM" >}}` for other releases.
- **No emoji on the entry heading**: the `:gift:` lives on the `## Features` section heading only (see `.claude/trn-format-reference.md`).

#### Tone & style

- **More Sales, less Packungsbeilage**: focus on value and excitement, not exhaustive description.
- **Less is more**: short, punchy sentences. Omit anything not directly relevant. If in doubt, leave it out.
- **Use regular hyphens**: write `-` not `—` in the output.
- **Use visuals**: include screenshots for UI-facing features. Use `{{< img >}}` with meaningful alt text.

## Step 5: Ask for feedback

Ask: _"Does this look right? Anything to adjust — in the documentation or the TRN entry — wording, missing details, or config examples?"_

Apply any requested changes to both the docs and the TRN entry.

## Step 6: Insert into the release notes file

1. Open `content/operations/releases/<release-identifier>.md`.
2. Locate `## Features :gift:`.
3. Append the entry at the end of that section, before the next `##` heading.
4. Save and confirm to the developer — summarize both what changed in the documentation (with paths) and the TRN entry that was added.
5. If images were provided: remind the developer to manually save each image to its target directory (`content/operations/releases/` for TRN images, the relevant doc folder for documentation images) using the exact filename from the `{{< img src="..." >}}` tags. Claude cannot write image files directly.

## Step 7: Optionally commit and open a PR

Ask the developer: _"Want me to commit these changes and open a PR? (yes / no)"_ If they say no, stop here — the changes are left in the working tree for them to handle.

If yes:

1. **Branch.** If currently on `main`, create a branch (working changes carry over):
   ```bash
   git checkout -b docs/<short-feature-slug>
   ```
   If already on a feature branch, commit there.
2. **Stage only the files this skill touched** — the documentation page(s) from Step 3 and the release file from Step 6. Check `git status` first; don't blanket-add unrelated changes.
3. **Commit.** Use a `feat` prefix so a docs deployment is triggered (a prefix like `docs`/`chore` does not deploy):
   ```bash
   git commit -m "feat(<release-handle>): document <feature name>"
   ```
4. **Push:**
   ```bash
   git push -u origin docs/<short-feature-slug>
   ```
5. **Open the PR** with `gh pr create`, base branch `main`. Keep the description **short, simple, and straightforward** — a couple of lines on what happened, no ceremony:

   ```
   ## Motivation

   Documents <feature name> for <release-handle>.

   _Created using the [document-feature](/.claude/skills/document-feature/SKILL.md) Claude Code skill._

   ## Changelog

   - <Added/updated doc page(s), with path(s)>
   - Added a Feature entry to <release-handle>
   ```

   Omit any line that doesn't apply (e.g. drop the doc-page line if the feature had nothing to document).

6. Return the PR URL to the developer.
