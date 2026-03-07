## Context

The site is deployed on Netlify as a static website. The `_redirects` file controls URL routing. Currently, `/README.md` is redirected to `/` (the root page), which returns `index.html` instead of the raw markdown file. This prevents any client-side code from fetching `README.md` via `fetch('./README.md')` for in-app display.

## Goals / Non-Goals

**Goals:**
- Allow `README.md` to be served as a static file by removing its redirect rule
- Preserve all other redirect rules unchanged

**Non-Goals:**
- Changing the content or format of `README.md`
- Adding any new redirect rules
- Modifying JavaScript or HTML to consume the README (that is a separate feature)

## Decisions

### Decision 1: Remove only the `/README.md /` line

**Choice**: Delete the single line `/README.md /` from `_redirects`.

**Rationale**: This is the minimal change needed. Netlify serves static files by default when no redirect rule matches, so removing the rule is sufficient — no additional configuration is required.

**Alternatives considered**:
- *Use a `200` rewrite instead of removing the line*: Unnecessary complexity; the file is already present in the deploy, so it will be served once the redirect is gone.
- *Move README.md to a different path*: Would break GitHub conventions and add unnecessary complexity.

## Risks / Trade-offs

- **[Exposure of README.md]** → Low risk. The README is already public on GitHub. Serving it from the deployed site adds no new information disclosure.
- **[Cache behavior]** → Netlify will serve `README.md` with default static file caching headers. This is acceptable; the `_headers` file can be updated later if custom cache-control is needed.
