## Context

The project currently ships with a stub `README.md` containing only the repository name. The sister project [obs-weather-widget](https://github.com/jim60105/obs-weather-widget) has a well-structured README in 正體中文 that serves as the style and structure reference. This change is documentation-only — no code modifications are involved.

## Goals / Non-Goals

**Goals:**
- Produce a complete, polished README.md that matches the style and quality of the obs-weather-widget README
- Write all prose in 正體中文 while keeping technical identifiers in English
- Include placeholder references for screenshots/video that can be filled in later
- Accurately document the widget's features, usage workflow, and URL parameters

**Non-Goals:**
- Capturing actual screenshots or recording preview videos (those are separate media tasks)
- Modifying any widget code or behavior
- Adding CI/CD badges or automated documentation generation
- Translating the README into other languages

## Decisions

### 1. Single README file at repository root
The documentation will be a single `README.md` at the project root, consistent with the sister project. No separate docs directory or wiki is needed given the project's simplicity.

**Alternatives considered**: A `docs/` folder with multiple pages — rejected because the project is a single HTML file and doesn't warrant multi-page documentation.

### 2. Follow obs-weather-widget README structure exactly
The section ordering, heading levels, emoji-bullet style, and 正體中文 license text will mirror the sister project to maintain family consistency.

**Alternatives considered**: A more minimal README (just features + usage) — rejected because the sister project sets a quality bar that users and contributors will expect.

### 3. Screenshot/video placeholders using HTML comments
Since actual media assets may not be available at README creation time, the document will use HTML comment placeholders (`<!-- screenshot -->`) or GitHub-compatible image/video syntax pointing to placeholder URLs that can be updated later.

### 4. Creative slogan
A memorable one-line slogan will be crafted to sit below the title, similar to "把療癒的天空搬進直播畫面" in the weather widget. The slogan should evoke the glassmorphism aesthetic and the progress/tracking purpose of the widget.

## Risks / Trade-offs

- **[Placeholder media]** → Screenshots and video are not part of this change. The README will ship with placeholder comments that need to be replaced with actual media in a follow-up task.
- **[Single-file simplicity]** → The project structure section will be much shorter than the sister project's. This is acceptable and accurately reflects the project's architecture.
- **[Feature drift]** → If widget features change after this README is written, the documentation may become stale. Mitigation: specs are the source of truth; README can be updated independently.
