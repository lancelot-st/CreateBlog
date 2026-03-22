# CreateBlog

CreateBlog is a template-driven personal blog starter. Users clone the repository, pick a visual template, tune the site config, write Markdown locally, and publish with GitHub Pages.

## What it includes

- Markdown-based posts in `src/content/posts/`
- Config-driven site metadata, navigation, template, accent, and click effects in `blog.config.json`
- Three visual templates: `spotlight`, `editorial`, `terminal`
- Automatic tag pages and post pages
- GitHub Pages deployment workflow in `.github/workflows/deploy.yml`
- A local setup command and a new-post helper script

## Quick start

```bash
npm install
npm run setup
npm run dev
```

## Create your own blog

1. Fork or clone this repository into your own GitHub account.
2. Run `npm install`.
3. Run `npm run setup` and answer the prompts for:
   - site title
   - GitHub username
   - repository name
   - template
   - accent color
   - click effect
4. Edit `blog.config.json` if you want more control over navigation or metadata.
5. Write posts as Markdown files inside `src/content/posts/`.
6. Push to `main`.
7. In GitHub repository settings, set Pages to use `GitHub Actions`.

## Write a new post

```bash
npm run new-post -- --title "My First Post"
```

## Key files

- `blog.config.json`: site identity and visual settings
- `src/content/posts/`: Markdown posts
- `src/pages/`: homepage, tag index, post pages
- `scripts/setup-blog.mjs`: interactive first-run setup
- `.github/workflows/deploy.yml`: GitHub Pages deployment

## Notes

- If your repository name is not `<username>.github.io`, the setup script configures a base path automatically.
- To add a custom domain later, update `blog.config.json` and add `public/CNAME`.
