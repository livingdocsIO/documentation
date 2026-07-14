---
name: write-trn-feature-section
description: Write a Feature section entry for a Livingdocs Technical Release Note (TRN) and insert it into the correct release file. Use this skill whenever a developer wants to document a new feature, asks to write or add a TRN entry, mentions "write feature section", "add a feature to the release notes", or provides PR URLs and asks to document a feature for a specific release (e.g. "write the TRN entry for release-2026-05"). This skill handles the full workflow: gathering PR details, Notion requirements, and screenshots, writing the entry in the right tone and format, and inserting it into the release file.
---

# Write TRN Feature Section

## Step 1: Gather inputs

Ask **one question at a time** — wait for each answer before asking the next:

1. **Release** — identifier in `release-YYYY-MM` format. Accept plain year/month and normalize it yourself.
2. **GitHub PR URLs** — ask whether they'd like to add all URLs at once or one at a time. If one at a time: ask for the first URL, then ask "Any more PRs? (say 'done' to continue)" and keep collecting until done. If all at once: accept a list of URLs in a single message.
3. **Notion requirement URL** — original requirement page (if available)
4. **Cycle Demo Presentation** — a Figma Slides URL (see Step 2 for how it's read). Prefer a **node-specific** link: in Figma, select the relevant slide → Copy link → the URL contains `node-id=...`, which lets a single slide be read at full resolution. A plain deck URL works too. Say "no" to skip.
5. **Additional context** — free-form notes, summaries, or exclusions (e.g. "ignore PR #123"). Optional.
6. **Screenshots or Images** — ask the developer to paste images (`Cmd+V` / `Ctrl+V`). For each: ask for the filename (`release-YYYY-MM-description.png`) and a short description of what is shown. Say "no" to skip.
7. **Documentation link** — path under `/reference/` or `/guides/`, if one exists or will exist

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

### Calibration examples

Use these two examples to calibrate tone and structure:

**Example 1 - Simple (auto-available, no config):**

```markdown
### Optimized Media Library Modal

We've optimized the image selection modal to display more images by increasing its width. The modal now shows up to 6 images per row (depending on screen size), compared to the previous layout. This makes better use of available screen space.

For more information, see the [Media Library]({{< ref "/reference/media-library" >}}) documentation.
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

For more information, see the [Distribution Dates]({{< ref "/reference/distribution-dates" >}}) documentation.
```

## Step 3: Write the feature entry

Use this format:

```
### FEATURE NAME

INTRO_PARAGRAPH

[CONFIG_OR_API_SECTION if activation/config is required]

[{{< img src="FILENAME" alt="ALT TEXT" width="600" >}} if screenshot provided]

[{{< info >}}...{{< /info >}} if there's a prerequisite or important note]

[For more information, see the [LABEL]({{< ref "/path/to/doc" >}}) documentation.]
```

### Writing guidelines

#### Content & structure

- **Lead with user value**: open with what users can now do. Focus on benefit, not implementation.
- **High-level intro**: one short paragraph — no implementation details. Link to docs instead of repeating them.
- **Activation status**: always state whether auto-available or requires config. If unclear, ask the developer — getting this wrong misleads customers.
- **Config/API blocks**: only if config is required to activate the feature. Show only the diff. Use `js` or `json` code blocks.
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

## Step 4: Ask for feedback

Ask: _"Does this look right? Anything to adjust — wording, missing details, or config examples?"_

Apply any requested changes.

## Step 5: Insert into the release notes file

1. Open `content/operations/releases/<release-identifier>.md`.
2. Locate `## Features :gift:`.
3. Append the entry at the end of that section, before the next `##` heading.
4. Save and confirm to the developer.
5. If images were provided: remind the developer to manually save each image to `content/operations/releases/` using the exact filename from the `{{< img src="..." >}}` tags. Claude cannot write image files directly.
