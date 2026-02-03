export const theme = {
  colors: {
    // Backgrounds
    bg: "#0B1220",        // main app background (navy)
    surface: "#111B2E",   // cards / panels
    elevated: "#17223B",  // slightly raised elements

    // Text
    text: "#F3F4F6",      // primary text
    muted: "#9CA3AF",     // secondary text
    subtle: "#6B7280",    // hints / placeholders

    // Brand / actions
    primary: "#3B82F6",   // blue action color
    success: "#22C55E",   // green
    danger: "#EF4444",    // red

    // UI
    border: "rgba(255,255,255,0.08)",
  },

  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },

  radius: {
    sm: 10,
    md: 14,
    lg: 18,
  },

  font: {
    bigTitle:64,
    title: 48,
    subtitle: 18,
    body: 16,
    small: 13,
  },
} as const;

export type AppTheme = typeof theme;
