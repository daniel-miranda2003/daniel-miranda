export const themeConfig = {
  light: {
    "color-background": "#F4F4F4",
    "color-foreground": "#0F172A",
    "color-muted": "#E2E8F0",
    "color-muted-foreground": "#64748B",
    "color-border": "#CBD5E1",
    "color-accent": "#22D3EE",
    "color-primary-light": "#67E8F9",
    "color-primary-dark": "#0891B2",
    "color-secondary-light": "#94A3B8",
    "color-secondary-dark": "#475569",
  },

  dark: {
    "color-background": "#0F172A",
    "color-foreground": "#F4F4F4",
    "color-muted": "#1E293B",
    "color-muted-foreground": "#94A3B8",
    "color-border": "#334155",
    "color-accent": "#22D3EE",
    "color-primary-light": "#67E8F9",
    "color-primary-dark": "#0891B2",
    "color-secondary-light": "#94A3B8",
    "color-secondary-dark": "#475569",
  },
};

export function generateThemeCSS() {
  const lightVars = Object.entries(themeConfig.light)
    .map(([key, value]) => `--${key}: ${value};`)
    .join("\n    ");

  const darkVars = Object.entries(themeConfig.dark)
    .map(([key, value]) => `--${key}: ${value};`)
    .join("\n    ");

  return { lightVars, darkVars };
}
