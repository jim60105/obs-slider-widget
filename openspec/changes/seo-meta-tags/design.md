## Context

The OBS Slider Widget is a single-file static website (`index.html`) using PureJS + Tailwind CSS via CDN. It is deployed at `https://slider.obs.xn--jgy.tw/`. The current `<head>` section contains only basic charset, viewport, and title tags — no SEO, social sharing, or favicon metadata.

The sister project `obs-weather-widget` already implements a complete set of SEO meta tags, and this change mirrors that pattern for consistency across the project family.

## Goals / Non-Goals

**Goals:**
- Add complete SEO metadata to `index.html` for search engine discoverability
- Enable rich link previews when the URL is shared on social platforms (Facebook, Twitter/X, Discord, LINE)
- Add favicon references for browser tab icons and mobile bookmarks
- Change `lang` attribute to `zh-Hant` to match the target audience language
- Maintain structural consistency with the `obs-weather-widget` sister project

**Non-Goals:**
- Creating actual favicon image files or `preview.png` (asset creation is a separate task)
- Creating the `site.webmanifest` file (can be added independently)
- Adding structured data (JSON-LD) or advanced SEO features
- Server-side rendering or dynamic meta tag generation

## Decisions

### Decision 1: Mirror the obs-weather-widget meta tag structure
**Choice**: Use the exact same meta tag structure and ordering as `obs-weather-widget`.
**Rationale**: Consistency across projects reduces maintenance burden and ensures both projects have equivalent social sharing capabilities. The pattern is already proven to work.
**Alternative considered**: Using a meta tag generator tool — rejected because the sister project already provides a tested template.

### Decision 2: Place all SEO tags before existing script/link tags
**Choice**: Insert all new meta tags and link tags in the `<head>` after the existing `<title>` tag and before the Tailwind CSS `<script>` tag.
**Rationale**: Meta tags are conventionally placed early in `<head>` for fast parser access. Keeping them grouped together before functional scripts improves readability.

### Decision 3: Reference assets that may not exist yet
**Choice**: Add `<link>` and `<meta>` tags referencing `/favicon-96x96.png`, `/favicon.svg`, `/favicon.ico`, `/apple-touch-icon.png`, `/preview.png`, and `/site.webmanifest` even if the files do not yet exist.
**Rationale**: The HTML tags are harmless when files are missing (browsers gracefully ignore missing favicons), and having the tags in place means assets can be added later without further HTML changes.

## Risks / Trade-offs

- **[Missing assets]** → Favicon and preview image references will 404 until asset files are created. Browsers handle this gracefully with no user-visible errors. Mitigation: create assets as a follow-up task.
- **[Hardcoded URL]** → The `og:url`, `twitter:url`, and `og:image` use the production URL `https://slider.obs.xn--jgy.tw/`. This is correct for the production deployment but means local development previews will reference production assets. Mitigation: acceptable for a static site with a single deployment target.
- **[Language change]** → Changing `lang="en"` to `lang="zh-Hant"` affects screen reader language detection. This is the correct behavior since the widget UI targets Traditional Chinese users.
