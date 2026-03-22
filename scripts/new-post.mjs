import { mkdir, writeFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";
import { argv } from "node:process";

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const titleIndex = argv.findIndex((value) => value === "--title");
const rawTitle = titleIndex > -1 ? argv[titleIndex + 1] : undefined;

if (!rawTitle) {
  console.error('Usage: npm run new-post -- --title "My New Post"');
  process.exit(1);
}

const slug = slugify(rawTitle);
const targetDir = resolve("src/content/posts");
const targetFile = resolve(targetDir, `${slug}.md`);
const today = new Date().toISOString().slice(0, 10);

await mkdir(targetDir, { recursive: true });

try {
  await access(targetFile, constants.F_OK);
  console.error(`Post already exists: ${targetFile}`);
  process.exit(1);
} catch {}

const template = `---
title: ${rawTitle}
description: Brief summary for ${rawTitle}
pubDate: ${today}
tags:
  - notes
---

Write your post here.
`;

await writeFile(targetFile, template);
console.log(`Created ${targetFile}`);
