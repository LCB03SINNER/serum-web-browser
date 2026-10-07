# Serum Web Browser

A secure, privacy-focused browser starter project built for a modern web experience with a strong emphasis on security hygiene.

## Overview

Serum is a browser starter prototype designed to demonstrate a secure web browsing interface with:

- a clean browser chrome
- a safe URL validation workflow
- privacy-focused defaults
- an extensible architecture for future security features

## Features

- Secure URL validation before navigation
- Privacy-first defaults and a minimal attack surface
- Clean tab bar and address UI
- Lightweight frontend architecture
- Ready for extension of sandbox, bookmarks, and history systems

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- Vite

## Quick Start

```bash
npm install
npm run dev
```

Then open the local preview URL shown in the terminal.

## Production Build

```bash
npm run build
```

## Security Notes

This starter intentionally enforces a simple security model:

- only `http://` and `https://` URLs are accepted
- invalid or empty URLs are rejected
- links are sanitized before rendering in the browser surface
- a strict CSP can be added later for production hardening

## Project Structure

```text
serum-web-browser/
├── index.html
├── package.json
├── README.md
├── SECURITY.md
├── LICENSE
├── src/
│   ├── main.js
│   └── styles.css
├── public/
│   └── favicon.svg
└── .gitignore
```

## Roadmap

- Add bookmark management
- Introduce history tracking
- Add a secure settings panel
- Support tab management and session persistence
- Implement stronger browser sandbox features

## License

MIT
