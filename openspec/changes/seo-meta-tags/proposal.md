## Why

The OBS Slider Widget at `https://slider.obs.xn--jgy.tw/` currently has no SEO or social sharing metadata in its `<head>` section. When shared on social media or indexed by search engines, the page lacks a proper preview (no title, description, or image card). Adding SEO meta tags improves discoverability and provides a professional link preview, consistent with the sister project `obs-weather-widget`.

## What Changes

- Change `<html lang="en">` to `<html lang="zh-Hant">` to reflect the primary content language
- Add `<meta name="robots" content="index, follow" />` for search engine crawling
- Add Open Graph meta tags (`og:type`, `og:url`, `og:title`, `og:description`, `og:image` with dimensions) for social media previews
- Add Twitter Card meta tags (`twitter:card`, `twitter:url`, `twitter:title`, `twitter:description`, `twitter:image`)
- Add favicon link tags (`favicon-96x96.png`, `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`)
- Add `<link rel="manifest" href="/site.webmanifest" />`
- Add `<meta name="apple-mobile-web-app-title">` for iOS home screen naming

## Capabilities

### New Capabilities
- `seo-metadata`: Defines all SEO-related meta tags, Open Graph tags, Twitter Card tags, favicon links, and web app manifest link in the document `<head>`

### Modified Capabilities
- `page-layout`: The `<html lang>` attribute changes from `"en"` to `"zh-Hant"`

## Impact

- **Code**: Only `index.html` `<head>` section is modified
- **Dependencies**: No new runtime dependencies; all changes are static HTML meta tags
- **Assets**: Favicon files and `site.webmanifest` are referenced but do not need to exist yet (can be added later); `preview.png` for OG/Twitter image is also referenced
- **Deployment**: No changes to deployment process; tags are effective immediately on deploy
