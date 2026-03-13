# Cletus Portfolio

Static portfolio site for Cletus Takudzwa Ngwerume built with React, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## GitHub Pages

This repo includes an automated GitHub Pages workflow at [.github/workflows/deploy.yml](/Users/cletu/projects/cletus-portfolio/.github/workflows/deploy.yml).

### One-time GitHub setup

1. Push this repository to GitHub.
2. Open `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `Source: GitHub Actions`.

### Deploy flow

1. Test locally:

```bash
npm run build:gh
npm run preview
```

2. Commit and push to `main`.
3. GitHub Actions will build the site and publish `dist/` automatically.

You can also run the workflow manually from the `Actions` tab using `Deploy Portfolio`.

## Key files

- App content and sections: [src/components/Sections.jsx](/Users/cletu/projects/cletus-portfolio/src/components/Sections.jsx)
- Main app shell: [src/App.jsx](/Users/cletu/projects/cletus-portfolio/src/App.jsx)
- Styling: [src/styles.css](/Users/cletu/projects/cletus-portfolio/src/styles.css)
- Static assets: [public/assets](/Users/cletu/projects/cletus-portfolio/public/assets)

## Personal info to update later if needed

- Contact links in [src/components/Sections.jsx](/Users/cletu/projects/cletus-portfolio/src/components/Sections.jsx)
- Images and resume in [public/assets](/Users/cletu/projects/cletus-portfolio/public/assets)
