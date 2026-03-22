import { readFile, writeFile } from "node:fs/promises";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const filePath = new URL("../blog.config.json", import.meta.url);
const currentConfig = JSON.parse(await readFile(filePath, "utf8"));

const rl = createInterface({ input, output });

function fallback(value, nextValue) {
  return nextValue?.trim() ? nextValue.trim() : value;
}

try {
  console.log("CreateBlog setup");
  console.log("Press Enter to keep the current value.\n");

  const title = await rl.question(`Site title [${currentConfig.site.title}]: `);
  const description = await rl.question(`Site description [${currentConfig.site.description}]: `);
  const authorName = await rl.question(`Author name [${currentConfig.author.name}]: `);
  const githubUser = await rl.question(`GitHub username [${currentConfig.site.githubUser}]: `);
  const repo = await rl.question(`Repository name [${currentConfig.site.repo}]: `);
  const template = await rl.question(`Template (spotlight/editorial/terminal) [${currentConfig.appearance.template}]: `);
  const accent = await rl.question(`Accent (amber/cyan/rose/mint) [${currentConfig.appearance.accent}]: `);
  const clickEffect = await rl.question(`Click effect (sparkle/pulse/confetti/none) [${currentConfig.appearance.clickEffect}]: `);

  const nextConfig = {
    ...currentConfig,
    site: {
      ...currentConfig.site,
      title: fallback(currentConfig.site.title, title),
      description: fallback(currentConfig.site.description, description),
      githubUser: fallback(currentConfig.site.githubUser, githubUser),
      repo: fallback(currentConfig.site.repo, repo)
    },
    author: {
      ...currentConfig.author,
      name: fallback(currentConfig.author.name, authorName)
    },
    appearance: {
      ...currentConfig.appearance,
      template: fallback(currentConfig.appearance.template, template),
      accent: fallback(currentConfig.appearance.accent, accent),
      clickEffect: fallback(currentConfig.appearance.clickEffect, clickEffect)
    }
  };

  const repoName = nextConfig.site.repo;
  const githubUsername = nextConfig.site.githubUser;

  nextConfig.site.url = `https://${githubUsername}.github.io`;
  nextConfig.site.basePath = repoName === `${githubUsername}.github.io` ? "/" : `/${repoName}`;

  await writeFile(filePath, `${JSON.stringify(nextConfig, null, 2)}\n`);

  console.log("\nConfiguration updated:");
  console.log(`- site: ${nextConfig.site.title}`);
  console.log(`- url: ${nextConfig.site.url}${nextConfig.site.basePath === "/" ? "" : nextConfig.site.basePath}`);
  console.log(`- template: ${nextConfig.appearance.template}`);
  console.log(`- accent: ${nextConfig.appearance.accent}`);
  console.log(`- click effect: ${nextConfig.appearance.clickEffect}`);
} finally {
  rl.close();
}
