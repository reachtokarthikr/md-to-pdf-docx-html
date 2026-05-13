<p align="center">
  <img src="logo.svg" alt="md.export" width="280"/>
</p>

# From MD To PDF

A powerful, single-file browser-based Markdown converter that transforms your markdown into beautifully formatted PDF, DOCX, or HTML documents. No server required — runs entirely in your browser.

🌐 **Live Demo:** Open `index.html` in any modern browser.

## ✨ Features

- 📝 **Live Preview** — Split-pane editor with real-time markdown rendering
- ✍️ **CodeMirror Editor** — Markdown syntax highlighting, line numbers, real undo/redo history
- 📄 **Multiple Export Formats** — PDF, DOCX (Word), and standalone HTML
- 📋 **Clipboard Actions** — Copy rendered HTML or generated PDF directly to the clipboard
- 🎨 **Three Themes** — Modern, Inter, and Academic styling + light/dark UI toggle
- 🧮 **Math Support** — LaTeX rendering via KaTeX
- 📊 **Diagrams** — Mermaid diagrams (flowcharts, sequences, gantt charts, etc.)
- 🌈 **Syntax Highlighting** — 100+ programming languages via highlight.js
- 📑 **9 Built-in Templates** — Sample, README, Resume, Report, Meeting Notes, API Docs, Letter, Blog, Notes
- ⌨️ **Keyboard Shortcuts** — Productive editing with familiar bindings
- 📐 **Configurable Output** — Custom margins, headers, footers, page numbers
- 🎯 **GitHub Flavored Markdown** — Tables, task lists, strikethrough, and more
- 💾 **Autosave** — Content and settings persist across browser sessions
- 🔍 **Find & Replace** — Regex-capable find/replace with match navigation
- 📋 **TOC Panel** — Auto-generated table of contents with click-to-scroll
- 🖼️ **Paste Images** — Drag-drop or paste screenshots → base64 inline images
- 📱 **Mobile Responsive** — Stack layout with pane-swap on small screens
- 🌐 **PWA / Offline** — Installable as an app, works without internet after first load

## 🚀 Quick Start

### Option 1: Open Directly

Just open `index.html` in your browser — that's it!

### Option 2: Local Dev Server

```bash
npm install
npx serve . -p 4200 --no-clipboard
```

Then visit `http://localhost:4200`.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+B` | Bold |
| `Ctrl+I` | Italic |
| `Ctrl+K` | Insert Link |
| `Ctrl+Shift+C` | Inline Code |
| `Ctrl+F` | Find / Replace |
| `Ctrl+P` | Download PDF |
| `Ctrl+S` | Save Markdown |
| `Ctrl+Z` / `Ctrl+Y` | Undo / Redo |
| `Ctrl+/` | Show Help |
| `Esc` | Close Modal / Find bar |

## 🧱 Built With

- [CodeMirror 5](https://codemirror.net/5/) — Editor with Markdown syntax highlighting
- [marked.js](https://marked.js.org/) — Markdown parser
- [highlight.js](https://highlightjs.org/) — Syntax highlighting
- [KaTeX](https://katex.org/) — Math rendering
- [Mermaid](https://mermaid.js.org/) — Diagrams
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) — PDF generation
- [docx](https://docx.js.org/) — DOCX generation
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/) — Client-side downloads

## 📁 Project Structure

```
.
├── index.html              # Single-file application (HTML + CSS + JS)
├── manifest.webmanifest    # PWA manifest for installability
├── sw.js                   # Service worker for offline caching
├── icon.svg                # App icon
├── logo.svg                # App logo
├── package.json            # NPM metadata
├── LICENSE                 # Apache 2.0 License
└── README.md               # This file
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

## 📜 License

Licensed under the **Apache License, Version 2.0**. See [LICENSE](LICENSE) for details.

## 👤 Author

**Karthikeyan Rajendran** — [github.com/reachtokarthikr](https://github.com/reachtokarthikr) · © 2026
