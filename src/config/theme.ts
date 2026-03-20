export const themeConfig = {
  light: {
    "color-background": "255 255 255",
    "color-foreground": "17 24 39",
    "color-muted": "243 244 246",
    "color-accent": "56 189 248",
    "color-primary-light": "#38bdf8",
    "color-primary-dark": "#0284c7",
    "color-secondary-light": "#FF6B6B",
    "color-secondary-dark": "#E63946",
  },
  dark: {
    "color-background": "17 24 39",
    "color-foreground": "243 244 246",
    "color-muted": "31 41 55",
    "color-accent": "56 189 248",
    "color-primary-light": "#0ea5e9",
    "color-primary-dark": "#075985",
    "color-secondary-light": "#FF8A80",
    "color-secondary-dark": "#FF5252",
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
