# Project Guidelines

## Project-Specific Guidelines (Portfolio Website)

### Architecture & Data Separation
- Keep all portfolio data (projects, work history, skills, research, and contact links) strictly isolated in dedicated data files (`data/portfolio.ts` or JSON).
- Never hardcode project text directly inside component JSX.

### Design & Styling
- Build with a mobile-first, responsive design, ensuring support down to 320px.
- Enforce a clean, technical, modern aesthetic with native dark mode support.
- Use semantic HTML elements (`<main>`, `<section>`, `<article>`, `<nav>`) and ensure proper ARIA attributes and high color contrast.

### Component Structures
- **Project Showcase:** Cards/modals must consistently support a title, concise summary, technical tag list (languages/frameworks/tools), media/thumbnail slots, and links (live demo, GitHub repo, or documentation).
- **Interactive/Technical Highlights:** Format code blocks, architecture diagrams, or dynamic demos with clean syntax highlighting and tight layout fit.

### Performance
- Prioritize fast load times.
- Lazy load below-the-fold media, optimize asset sizes.
- Avoid heavy third-party UI libraries.
