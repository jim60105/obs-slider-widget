## ADDED Requirements

### Requirement: README language and tone
The README SHALL be written entirely in 正體中文 (Traditional Chinese). Code examples, CLI commands, and technical identifiers (e.g., URL parameters, file names) SHALL remain in English. The document SHALL include a creative one-line slogan beneath the project title that captures the widget's essence in a memorable phrase.

#### Scenario: Language consistency
- **WHEN** a reader opens README.md
- **THEN** all prose content SHALL be in 正體中文, while code blocks, file paths, and technical terms SHALL be in English

#### Scenario: Slogan presence
- **WHEN** a reader views the top of the README
- **THEN** a creative slogan line SHALL appear directly below the title heading, conveying the project's purpose in an evocative phrase

### Requirement: Title with deployed URL
The README SHALL begin with a level-1 heading containing the project name and a hyperlink to the deployed URL `https://slider.obs.琳.tw/`.

#### Scenario: Title format
- **WHEN** the README is rendered
- **THEN** the first line SHALL be a heading like `# 玻璃風 OBS 滑桿小工具 <https://slider.obs.琳.tw/>`

### Requirement: Feature list section
The README SHALL contain a `## 功能` section with an emoji-bulleted list summarizing the widget's key features. The list SHALL cover at minimum: glassmorphism progress bar, control panel, named preset save/load/delete, multi-instance support via URL parameter, layout flip, OBS auto-detection with transparent background, real-time sync, vertical text display, full-height progress bar, Google Fonts selector, and theme color picker.

#### Scenario: Feature count and format
- **WHEN** a reader views the 功能 section
- **THEN** there SHALL be at least 10 bullet items, each prefixed with a relevant emoji

### Requirement: Preview media section
The README SHALL contain a section for a video preview embed (using GitHub-compatible `[video.webm](url)` syntax) or a screenshot placeholder. This section SHALL appear between the slogan and the feature list.

#### Scenario: Preview media present
- **WHEN** the README is rendered on GitHub
- **THEN** a video embed or screenshot image SHALL be visible before the feature list

### Requirement: Page description section
The README SHALL contain a `## 頁面說明` section (or equivalent) describing the single-page architecture. It SHALL explain that the page serves both as the control panel and the OBS widget display, and how OBS auto-detection switches between modes.

#### Scenario: Page description content
- **WHEN** a reader views the page description section
- **THEN** it SHALL explain the dual-purpose single-page design and OBS transparent background detection

### Requirement: Usage instructions section
The README SHALL contain a `## 使用方式` section with numbered steps guiding users through: (1) opening the settings page, (2) configuring the widget controls, (3) saving a preset, and (4) adding the URL as an OBS browser source with recommended dimensions. Each major step SHALL include placeholder references for future screenshots.

#### Scenario: Step completeness
- **WHEN** a reader follows the usage instructions
- **THEN** there SHALL be clearly numbered steps covering configuration, preset saving, and OBS browser source setup

#### Scenario: Screenshot placeholders
- **WHEN** a reader views the usage instructions
- **THEN** each major step SHALL include an image placeholder or comment indicating where a screenshot will be added

### Requirement: URL parameters table
The README SHALL contain a `## URL 參數` section with a markdown table listing all supported URL query parameters. The table SHALL have columns for parameter name, type, and description. The `instance` parameter (type: string) SHALL be documented, explaining its purpose for multi-instance namespace isolation in localStorage.

#### Scenario: Instance parameter documented
- **WHEN** a reader views the URL parameters table
- **THEN** the `instance` parameter SHALL be listed with type `string` and a description explaining that it provides localStorage namespace isolation for running multiple independent widget instances

### Requirement: Tech stack section
The README SHALL contain a `## 技術棧` section listing the technologies used: HTML5, Tailwind CSS (CDN), Vanilla JavaScript (ES6+), and a note that no build step is required.

#### Scenario: Tech stack completeness
- **WHEN** a reader views the tech stack section
- **THEN** all four items (HTML5, Tailwind CSS CDN, Vanilla JS ES6+, no build step) SHALL be listed

### Requirement: Project structure section
The README SHALL contain a `## 專案結構` section showing a tree diagram of the project files. Since this is a single-file project, the tree SHALL be minimal, listing at minimum: `index.html`, `README.md`, `LICENSE`, and the `openspec/` directory.

#### Scenario: Structure reflects single-file nature
- **WHEN** a reader views the project structure
- **THEN** the tree SHALL show the project root with `index.html` as the main (and only) application file

### Requirement: Development section
The README SHALL contain a `## 開發` section with prerequisites (modern web browser, local web server) and instructions for running locally using `npx serve` or Python's `http.server`.

#### Scenario: Development instructions executable
- **WHEN** a developer follows the development section
- **THEN** they SHALL find a prerequisites list and at least two example commands for starting a local server

### Requirement: License section
The README SHALL contain a `## 授權` section that includes: an AGPL-3.0 badge/image, a link to the LICENSE file, the full copyright notice in 正體中文 attributing copyright to Jim Chen, and the standard AGPL-3.0 warranty disclaimer text in 正體中文, matching the style used in obs-weather-widget.

#### Scenario: License completeness
- **WHEN** a reader views the license section
- **THEN** they SHALL see the AGPL image, a link to `./LICENSE`, the copyright holder name (Jim Chen), and the 正體中文 AGPL disclaimer text

### Requirement: Acknowledgements section
The README SHALL contain a `## 致謝` section crediting relevant technologies and resources used by the project (e.g., Tailwind CSS, Google Fonts).

#### Scenario: Acknowledgements present
- **WHEN** a reader views the acknowledgements section
- **THEN** at least one credited technology or resource SHALL be listed

### Requirement: Section ordering
The README sections SHALL follow this order: Title with URL → Slogan → Preview media → 功能 → 展示 (screenshot) → 頁面說明 → 使用方式 → URL 參數 → 技術棧 → 專案結構 → 開發 → 授權 → 致謝.

#### Scenario: Section order matches specification
- **WHEN** the README is reviewed
- **THEN** the sections SHALL appear in the prescribed order without omissions
