export const themeConfig = {
  light: {
    "color-background": "#F4F4F4",
    "color-foreground": "#161616",
    "color-muted": "#E6E6E6",
    "color-muted-foreground": "#5E5E5E",
    "color-border": "#D0D0D0",
    "color-accent": "#161616",
    "color-primary-light": "#D8D8D8",
    "color-primary-dark": "#161616",
    "color-secondary-light": "#A8A8A8",
    "color-secondary-dark": "#4A4A4A",
  },

  dark: {
    "color-background": "#0E0E0E",
    "color-foreground": "#F4F4F4",
    "color-muted": "#1A1A1A",
    "color-muted-foreground": "#A0A0A0",
    "color-border": "#333333",
    "color-accent": "#EDEDED",
    "color-primary-light": "#D8D8D8",
    "color-primary-dark": "#161616",
    "color-secondary-light": "#A8A8A8",
    "color-secondary-dark": "#4A4A4A",
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
