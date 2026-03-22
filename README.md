# CreateBlog

CreateBlog is a template-driven personal blog starter. Users clone the repository, pick a visual template, tune the site config, write Markdown locally, and publish with GitHub Pages.

## What it includes

- Markdown-based posts in `src/content/posts/`
- Config-driven site metadata, navigation, template, accent, and click effects in `blog.config.json`
- Three visual templates: `spotlight`, `editorial`, `terminal`
- Automatic tag pages and post pages
- GitHub Pages deployment workflow in `.github/workflows/deploy.yml`
- A local setup command and a new-post helper script

## Run after download

### 1. Clone the repository

```bash
git clone git@github.com:lancelot-st/CreateBlog.git
cd CreateBlog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Initialize your blog

```bash
npm run setup
```

This command will ask for:

- site title
- site description
- author name
- GitHub username
- repository name
- template
- accent color
- click effect

### 4. Start local development

```bash
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321) in your browser.

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
5. Start the local site with `npm run dev`.
6. Write posts as Markdown files inside `src/content/posts/`.
7. Push to `main`.
8. In GitHub repository settings, set Pages to use `GitHub Actions`.

## Write a new post

```bash
npm run new-post -- --title "My First Post"
```

The new Markdown file will be created inside `src/content/posts/`.

## Publish to GitHub Pages

After editing your blog locally, publish it with:

```bash
git add .
git commit -m "feat: update blog"
git push
```

If GitHub Pages is configured to use `GitHub Actions`, each push to `main` will trigger a new deployment.

## Key files

- `blog.config.json`: site identity and visual settings
- `src/content/posts/`: Markdown posts
- `src/pages/`: homepage, tag index, post pages
- `scripts/setup-blog.mjs`: interactive first-run setup
- `.github/workflows/deploy.yml`: GitHub Pages deployment

## Notes

- If your repository name is not `<username>.github.io`, the setup script configures a base path automatically.
- To add a custom domain later, update `blog.config.json` and add `public/CNAME`.
