export const fontsize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
} as const;

export type FontSize = keyof typeof fontsize;

export const fontweight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "500",
  semibold: "600",
  bold: "700",
  extrabold: "900",
} as const;

export type FontWeight = keyof typeof fontweight;
