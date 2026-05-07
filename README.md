# MD to PDF / DOCX / HTML Converter

A powerful, single-file browser-based Markdown converter that transforms your markdown into beautifully formatted PDF, DOCX, or HTML documents. No server required — runs entirely in your browser.

🌐 **Live Demo:** Open `index.html` in any modern browser.

## ✨ Features

- 📝 **Live Preview** — Split-pane editor with real-time markdown rendering
- 📄 **Multiple Export Formats** — PDF, DOCX (Word), and standalone HTML
- 🎨 **Three Themes** — Modern, Inter, and Academic styling
- 🧮 **Math Support** — LaTeX rendering via KaTeX
- 📊 **Diagrams** — Mermaid diagrams (flowcharts, sequences, gantt charts, etc.)
- 🌈 **Syntax Highlighting** — 100+ programming languages via highlight.js
- 📑 **9 Built-in Templates** — Sample, README, Resume, Report, Meeting Notes, API Docs, Letter, Blog, Notes
- ⌨️ **Keyboard Shortcuts** — Productive editing with familiar bindings
- 📐 **Configurable Output** — Multiple paper sizes (A4, Letter, Legal, etc.) and orientations
- 🎯 **GitHub Flavored Markdown** — Tables, task lists, strikethrough, and more

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
| `Ctrl+P` | Download PDF |
| `Ctrl+S` | Save Markdown |
| `Ctrl+Z` / `Ctrl+Y` | Undo / Redo |
| `Ctrl+/` | Show Help |
| `Esc` | Close Modal |

## 🧱 Built With

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
├── index.html          # Single-file application (HTML + CSS + JS)
├── package.json        # NPM metadata
├── sample.pdf          # Example PDF output
├── LICENSE             # Apache 2.0 License
└── README.md           # This file
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

## 📜 License

Licensed under the **Apache License, Version 2.0**. See [LICENSE](LICENSE) for details.
