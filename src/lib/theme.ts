import { config } from "./site";

const templates = {
  spotlight: {
    name: "Spotlight",
    pageClass: "theme-spotlight",
    heroClass: "hero-spotlight"
  },
  editorial: {
    name: "Editorial",
    pageClass: "theme-editorial",
    heroClass: "hero-editorial"
  },
  terminal: {
    name: "Terminal",
    pageClass: "theme-terminal",
    heroClass: "hero-terminal"
  }
} as const;

const accents = {
  amber: {
    accent: "#ffb000",
    accentSoft: "rgba(255, 176, 0, 0.18)"
  },
  cyan: {
    accent: "#38bdf8",
    accentSoft: "rgba(56, 189, 248, 0.18)"
  },
  rose: {
    accent: "#fb7185",
    accentSoft: "rgba(251, 113, 133, 0.18)"
  },
  mint: {
    accent: "#34d399",
    accentSoft: "rgba(52, 211, 153, 0.18)"
  }
} as const;

export function getTheme() {
  const template = templates[config.appearance.template as keyof typeof templates] ?? templates.spotlight;
  const accent = accents[config.appearance.accent as keyof typeof accents] ?? accents.amber;

  return {
    template,
    accent,
    cardStyle: config.appearance.cardStyle,
    clickEffect: config.appearance.clickEffect
  };
}

export const templateOptions = Object.keys(templates);
export const accentOptions = Object.keys(accents);
