import siteConfig from "../../blog.config.json";

export type SiteConfig = typeof siteConfig;

export const config = siteConfig;

export function ensureLeadingSlash(value: string) {
  if (!value) {
    return "/";
  }

  return value.startsWith("/") ? value : `/${value}`;
}

export function trimTrailingSlash(value: string) {
  if (value === "/") {
    return "/";
  }

  return value.replace(/\/+$/, "") || "/";
}

export function getBasePath() {
  return trimTrailingSlash(ensureLeadingSlash(config.site.basePath || "/"));
}

export function linkTo(pathname = "/") {
  if (/^https?:\/\//.test(pathname)) {
    return pathname;
  }

  const normalizedBase = getBasePath();
  const normalizedPath = pathname === "/" ? "/" : trimTrailingSlash(ensureLeadingSlash(pathname));

  if (normalizedBase === "/") {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `${normalizedBase}/` : `${normalizedBase}${normalizedPath}`;
}

export function absoluteUrl(pathname = "/") {
  const root = config.site.url.replace(/\/+$/, "");
  const href = linkTo(pathname);
  return href === "/" ? `${root}/` : `${root}${href}`;
}

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
