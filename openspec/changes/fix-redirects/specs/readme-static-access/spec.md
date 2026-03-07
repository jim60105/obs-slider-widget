## ADDED Requirements

### Requirement: README.md served as static file
The deployed site SHALL serve `README.md` as a static file at its original path. The Netlify `_redirects` file SHALL NOT contain a redirect rule for `/README.md`. When a client requests `/README.md`, the server SHALL respond with the raw markdown content and a `200` status code.

#### Scenario: Fetching README.md returns raw markdown
- **WHEN** a client sends a GET request to `/README.md`
- **THEN** the server SHALL respond with the raw markdown content of `README.md` and a `200` status code

#### Scenario: No redirect rule for README.md
- **WHEN** the `_redirects` file is inspected
- **THEN** there SHALL be no line matching `/README.md` as a redirect source
