# Jay Gopal Tripathy — Portfolio

Personal portfolio for Jay Gopal Tripathy — B.Tech CSE (AI & Robotics) at VIT Chennai.

**Live:** https://j4yop.github.io/jaygopal-portfolio/

## Stack

- React 19 + TypeScript + Vite
- TailwindCSS 3
- shadcn-style UI components (vendored)
- GitHub Actions → GitHub Pages

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:5173/

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages.

## Sections

- Hero — name, tagline (with ASCII glitch-ripple effect)
- About — bio + tags
- Tech stack — chips
- Journey — research + experience log
- GitHub stats — live API + contribution graph
- Projects — PitwallEar · RescueMesh · D8FN · SIH SCHM
- Contact — email + form