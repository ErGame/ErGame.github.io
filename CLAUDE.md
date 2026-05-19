# GitHub Pages — ErGame

## Project Overview
Personal GitHub Pages site for the username **ErGame**, deployed at `https://ergame.github.io`.

The site purpose is still being defined. We are exploring options together: personal portfolio, blog, project showcase, or a hybrid.

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
- [ ] Decide on site purpose (portfolio / blog / showcase / hybrid)
- [ ] Design homepage layout
- [ ] Set up GitHub remote and enable GitHub Pages
- [ ] Add real content
