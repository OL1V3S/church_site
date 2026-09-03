# Iglesia Templo Bautista

Bilingual English/Spanish website for Iglesia Templo Bautista in Dodge City, Kansas.

[View the live website](https://templobautista.net/)

## Development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Other commands:

- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the source with ESLint.

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`. The custom domain is configured in `CNAME`.

Built with React, Vite, React Router, and custom CSS.

Calendar icon by [Smashicons on Flaticon](https://www.flaticon.com/free-icon/appointment_16923800).
