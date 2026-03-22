import { defineConfig } from "astro/config";
import siteConfig from "./blog.config.json" with { type: "json" };

const base = siteConfig.site.basePath?.trim() || "/";
const normalizedBase = base === "/" ? "/" : base.startsWith("/") ? base : `/${base}`;

export default defineConfig({
  site: siteConfig.site.url,
  base: normalizedBase === "/" ? undefined : normalizedBase,
  output: "static",
  trailingSlash: "ignore"
});
