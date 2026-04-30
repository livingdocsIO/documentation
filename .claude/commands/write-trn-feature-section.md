Write a Feature section entry for a Livingdocs Technical Release Note (TRN) and insert it into the correct release file. Use when a developer wants to document a new feature in `content/operations/releases/`.

## Step 1: Gather inputs

Ask **one question at a time** — wait for each answer before asking the next:

1. **Release** — identifier in `release-YYYY-MM` format. Accept plain year/month and normalize it yourself.
2. **GitHub PR URLs** — ask for the first URL. After receiving it, ask "Any more PRs? (say 'done' to continue)" and keep collecting until done.
3. **Notion requirement URL** — original requirement page (if available)
4. **Product Demo Presentation** — Figma Slides URLs are not supported. Ask the developer to paste the first slide screenshot (`Cmd+V` / `Ctrl+V`) or slide text/notes. Then ask "Any more slides? (say 'done' to continue)". Say "none" to skip.
5. **Additional context** — free-form notes, summaries, or exclusions (e.g. "ignore PR #123"). Optional.
6. **Screenshots or Images** — ask the developer to paste images (`Cmd+V` / `Ctrl+V`). For each: ask for the filename (`release-YYYY-MM-description.png`) and a short description of what is shown. Say "none" to skip.
7. **Documentation link** — path under `/reference/` or `/guides/`, if one exists or will exist

## Step 2: Read the sources

- Fetch each GitHub PR: title, description, linked issues — understand what was built and why.
- If a Notion URL was provided, fetch it to understand the original user requirement.
- Use any demo slides or notes from steps 4 and 5 to understand how the feature was positioned.
- Place each image after the paragraph it best illustrates, using the developer's description to decide.
- Use these two examples to calibrate tone and structure:

**Example 1 - Simple (auto-available, no config):**

```markdown
### Optimized Media Library Modal :gift:

We've optimized the image selection modal to display more images by increasing its width. The modal now shows up to 6 images per row (depending on screen size), compared to the previous layout. This makes better use of available screen space.
```

**Example 2 - Complex (sub-sections, config, before/after):**

```markdown
### Distribution Dates UI Improvements :gift:

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
```

## Step 3: Write the feature entry

Use this format:

```
### FEATURE NAME :gift:

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
- **`:gift:` emoji**: always append to the `###` heading.

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
