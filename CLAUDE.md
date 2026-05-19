# GitHub Pages — ErGame

## Project Overview
Personal GitHub Pages site for the username **ErGame**, deployed at `https://ergame.github.io`.

**Direction: Personal Developer Portfolio.** Sections: Hero, About, Projects, Skills, Contact. Decided 2026-05-19 — chosen over blog (no time for regular writing), landing page (no product), interactive tool (low interest), and docs (no project to document).

## Tech Stack
- **Plain HTML / CSS / JavaScript** — no build step, no framework
- Deployed directly via GitHub Pages (push to `main` branch, `/ (root)` as source)

## File Structure
```
/
├── index.html        # Main entry point
├── style.css         # Global styles
├── script.js         # Global scripts (optional)
├── assets/           # Images, fonts, icons
└── CLAUDE.md         # This file
```

## Deployment
1. Push to `main` branch on `github.com/ErGame/ErGame.github.io`
2. GitHub Pages auto-deploys from root — no Actions needed for plain HTML
3. Site is live at `https://ergame.github.io`

## Development Conventions
- No framework, no build step unless we decide to add one
- Keep CSS in `style.css`; split into partials only if the file grows past ~400 lines
- Vanilla JS only until there is a clear reason to add a library
- Mobile-first responsive design
- Accessibility: semantic HTML, alt text on images, sufficient color contrast

## Current Status
- [x] Decide on site purpose → **Portfolio**
- [x] Design homepage layout (v1 mockup complete)
- [x] Replace placeholder content with real info from CV
- [ ] Add real avatar/photo (currently "JG" placeholder)
- [ ] Set up GitHub remote and enable GitHub Pages
- [ ] (Optional) Connect GitHub MCP server

## Owner Identity (from CV)
- **Real name:** Jesús Gámez Larrad
- **GitHub handle:** ErGame
- **Location:** Seville, Spain
- **Background:** Software Engineering degree (US, 2017–2022) + Master's in Computational Logic and AI (US, 2024–present)
- **Experience:** Test Means Engineer at Airtificial (.NET fullstack + Oracle SQL, 2023–2025), Lead E-Powertrain & Electronic Systems at eUS Racing (Python ECU + electronics, 2018–2025)
- **Languages:** Spanish (native), English (good), French (intermediate)
- **CV file:** `private/CV_English.pdf` (gitignored — do not commit or quote phone number publicly)
