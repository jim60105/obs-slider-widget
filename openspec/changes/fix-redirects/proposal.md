## Why

The `_redirects` file currently redirects `/README.md` to `/`, which prevents the readme-panel feature from fetching the raw markdown file at runtime via `fetch('./README.md')`. Removing this redirect line allows the README.md file to be served as-is, enabling in-app display of project documentation.

## What Changes

- Remove the `/README.md /` line from `_redirects` so that `README.md` is accessible as a static file
- No other redirect rules are affected

## Capabilities

### New Capabilities

- `readme-static-access`: README.md must be served as a static file (not redirected) so it can be fetched at runtime

### Modified Capabilities

_(none)_

## Impact

- **File**: `_redirects` (Netlify routing configuration)
- **Effect**: `README.md` will be served directly instead of redirecting to `/`, unblocking any feature that fetches the raw markdown content at runtime
- **Risk**: Minimal — the redirect was a protective measure to hide the file; removing it intentionally exposes the file for legitimate use
