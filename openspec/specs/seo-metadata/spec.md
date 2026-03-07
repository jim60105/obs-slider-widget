## Purpose

Defines SEO meta tags and Open Graph metadata for search engine visibility.

## Requirements

### Requirement: Robots meta tag
The `<head>` SHALL include `<meta name="robots" content="index, follow" />` to explicitly allow search engine indexing and link following.

#### Scenario: Search engine indexing allowed
- **WHEN** a search engine crawler visits the page
- **THEN** the page SHALL contain a robots meta tag with `content="index, follow"`

### Requirement: Open Graph meta tags
The `<head>` SHALL include Open Graph meta tags for social media link previews. The following tags SHALL be present:
- `og:type` set to `"website"`
- `og:url` set to `"https://slider.obs.xn--jgy.tw/"`
- `og:title` set to the page title
- `og:description` with a brief description of the widget
- `og:image` pointing to a preview image URL at `"https://slider.obs.xn--jgy.tw/preview.png"`
- `og:image:width` set to `"1200"`
- `og:image:height` set to `"630"`

#### Scenario: Social media link preview
- **WHEN** the page URL is shared on a platform that supports Open Graph (e.g., Facebook, Discord, LINE)
- **THEN** the platform SHALL be able to extract `og:title`, `og:description`, and `og:image` for rendering a rich link preview

#### Scenario: All required OG tags present
- **WHEN** the page source is inspected
- **THEN** the `<head>` SHALL contain `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:width`, and `og:image:height` meta tags

### Requirement: Twitter Card meta tags
The `<head>` SHALL include Twitter Card meta tags for Twitter/X link previews. The following tags SHALL be present:
- `twitter:card` set to `"summary_large_image"`
- `twitter:url` set to `"https://slider.obs.xn--jgy.tw/"`
- `twitter:title` set to the page title
- `twitter:description` with a brief description of the widget
- `twitter:image` pointing to a preview image URL at `"https://slider.obs.xn--jgy.tw/preview.png"`

#### Scenario: Twitter link preview
- **WHEN** the page URL is shared on Twitter/X
- **THEN** the platform SHALL be able to extract `twitter:title`, `twitter:description`, and `twitter:image` for rendering a large image card preview

### Requirement: Favicon link tags
The `<head>` SHALL include favicon link tags with the following structure:
- `<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />`
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
- `<link rel="shortcut icon" href="/favicon.ico" />`
- `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`

#### Scenario: Browser favicon display
- **WHEN** the page is loaded in a browser
- **THEN** the browser SHALL find favicon link tags referencing `/favicon-96x96.png`, `/favicon.svg`, `/favicon.ico`, and `/apple-touch-icon.png`

### Requirement: Web app manifest link
The `<head>` SHALL include `<link rel="manifest" href="/site.webmanifest" />` to reference a web app manifest file.

#### Scenario: Manifest link present
- **WHEN** the page source is inspected
- **THEN** the `<head>` SHALL contain a `<link rel="manifest">` tag pointing to `/site.webmanifest`

### Requirement: Apple mobile web app title
The `<head>` SHALL include `<meta name="apple-mobile-web-app-title">` with an appropriate content value for iOS home screen naming.

#### Scenario: iOS home screen name
- **WHEN** a user adds the page to their iOS home screen
- **THEN** the system SHALL use the `apple-mobile-web-app-title` meta tag value as the app name
