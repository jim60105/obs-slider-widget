# AGENTS.md — OBS Slider Widget

## Project Overview

OBS Slider Widget is a **single-file static website** (`index.html`) that provides a customizable vertical progress bar widget for OBS Studio browser sources. Users open the page directly in an OBS browser source, configure settings via the built-in control panel (left side), and the widget display (right side) updates in real time. OBS auto-detection switches the display area to a transparent background for stream overlay.

- **Deployed at**: <https://slider.obs.xn--jgy.tw/>
- **License**: AGPLv3
- **Language**: UI text is in Traditional Chinese (zh-Hant); code comments and commit messages are in English

## Tech Stack & Architecture

- **HTML5** — Single `index.html` (~580 lines) containing all HTML, CSS, and JavaScript
- **Tailwind CSS** — Loaded from CDN (`<script src="https://cdn.tailwindcss.com"></script>`), no build step
- **Vanilla JavaScript (ES6+)** — No frameworks, no bundler, no package.json
- **Google Fonts** — Dynamic loading via `<link>` element injection
- **localStorage** — Named preset persistence with `?instance=` URL parameter namespacing
- **Deployment** — Netlify (static files, `_headers` for security, `_redirects` for routing)

There is **no build step, no test suite, no linter, and no CI/CD pipeline**. Changes are validated by opening `index.html` in a browser or via a local server.

## Running Locally

```bash
# Start a local server (any of these work)
python3 -m http.server 8765
npx serve .
```

Then open `http://localhost:8765` in a browser.

## Project Layout

```
obs-slider-widget/
├── index.html              # THE application — all HTML, CSS, JS in one file
├── README.md               # Documentation in Traditional Chinese
├── AGENTS.md               # This file
├── LICENSE                  # AGPLv3
├── _headers                # Netlify security headers
├── _redirects              # Netlify URL redirects
├── site.webmanifest        # PWA manifest
├── favicon.svg / .ico / .png  # Favicon assets
├── web-app-manifest-*.png  # PWA icons
├── openspec/               # OpenSpec workflow (spec-driven schema)
│   ├── config.yaml         # Schema config
│   ├── specs/              # 27 feature specifications
│   └── changes/archive/    # Archived change proposals
└── .github/skills/         # 7 OpenSpec Copilot Skills
```

## Coding Conventions

### HTML / CSS

- **Indentation**: 2 spaces, consistently throughout
- **Tailwind classes**: Utility-first; custom classes (`.glass`, `.glass-input`, `.glass-range`, `.glass-track`, `.glass-fill`) defined in `<style>` block for glassmorphism design
- **CSS custom properties**: `--glass-bg`, `--glass-blur`, `--glass-border`, `--glass-shadow`, `--theme-color` on `:root`
- **Color mixing**: `color-mix(in srgb, var(--theme-color) XX%, transparent)` for theme-aware colors

### JavaScript

- **Named functions** for core logic: `function loadPreset(name) { ... }`
- **Arrow functions** for callbacks and event handlers
- **camelCase** naming: `getStorageKey()`, `loadAllPresets()`, `updateProgressDisplay()`
- **Event delegation**: Single `input` event listener on `#controlForm` with `switch(target.id)`
- **Synthetic events**: Step buttons dispatch `new Event('input', { bubbles: true })` on the slider
- **DOM access**: `document.getElementById()` exclusively (no querySelector)
- **Comments**: English, minimal — `// --- Section Title ---` for visual separation, inline only for complex logic

### Git Commits

- **Conventional Commits** format: `feat:`, `docs:`, `chore:`, `fix:`
- **Scope** when relevant: `chore(openspec): ...`
- **Trailer required**: `Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>`

## Key Design Patterns

### Layout Structure

```
#layoutContainer (flex, toggles flex-row-reverse for flip)
├── <aside> (w-[300px], control panel, aside-level scrollbar)
│   ├── Header (h2 + flip button ⇄)
│   ├── <form #controlForm> (7 control groups + preset management)
│   └── <footer> (copyright + license)
└── <main #displayPanel> (flex-1, display area)
    └── Progress bar widget (title + glass-track + fraction)
```

### OBS Integration

- **Detection**: `navigator.userAgent.indexOf('OBS') !== -1` → adds `obs` class to `<html>`
- **Transparent mode**: `html.obs body { background: transparent; }` and `html.obs main` removes background/border/shadow/backdrop-filter

### Preset System

- **Namespace**: `obs-slider-<instance>-presets` localStorage key (from `?instance=` URL param, defaults to `default`)
- **Schema**: Single JSON object mapping preset names to settings objects
- **Auto-init**: Creates `default` preset from form defaults if none exist
- **Empty name save**: Overwrites the currently selected preset

## OpenSpec Workflow

This project uses **OpenSpec** (spec-driven schema) for structured change management. The CLI is available at the system level as `openspec`. Skills in `.github/skills/` automate the propose → implement → archive cycle.

- **Propose**: `openspec new change "<name>"` then create proposal/design/specs/tasks
- **Implement**: Work through tasks in `tasks.md`, mark `- [x]` as complete
- **Archive**: Sync delta specs to `openspec/specs/`, then `git mv` to `changes/archive/`
- **27 specs** document all capabilities in `openspec/specs/<capability>/spec.md`
