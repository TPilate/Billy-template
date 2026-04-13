# Billy Template

A **Next.js** template with built-in CMS capabilities powered by Markdown and MDX.

## Features

- **File-based CMS** — manage content through Markdown/MDX files in the `content/` directory
- **Blog** — built-in blog with listing and individual post pages
- **Static Pages** — create standalone pages by adding files to `content/pages/`
- **Tailwind CSS** — utility-first styling with typography plugin
- **TypeScript** — full type safety
- **SEO-friendly** — server-rendered pages with dynamic metadata

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content Management

### Blog Posts

Add Markdown or MDX files to `content/blog/` with frontmatter:

```mdx
---
title: "My Post Title"
date: "2025-01-15"
description: "A brief description of the post."
---

Your content here...
```

Posts are automatically available at `/blog/[slug]` where the slug is derived from the filename.

### Pages

Add Markdown or MDX files to `content/pages/` with frontmatter:

```mdx
---
title: "Page Title"
description: "A brief description of the page."
---

Your page content here...
```

Pages are automatically available at `/[slug]`.

## Project Structure

```
├── content/              # CMS content directory
│   ├── blog/             # Blog posts (Markdown/MDX)
│   └── pages/            # Static pages (Markdown/MDX)
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── blog/         # Blog listing and post pages
│   │   └── [slug]/       # Dynamic CMS pages
│   ├── components/       # Reusable UI components
│   └── lib/              # Content parsing utilities
├── public/               # Static assets
└── package.json
```

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

## Extending

This template is designed to be extended:

- **Headless CMS** — integrate with Sanity, Strapi, Contentful, or similar
- **Authentication** — add admin routes with NextAuth.js
- **Database** — store content in a database
- **Search** — implement full-text search across content
