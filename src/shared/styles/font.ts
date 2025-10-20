import { StyleSheet } from "react-native";

export const fontsize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 30,
} as const;

export const fontweight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "500",
  semibold: "600",
  bold: "700",
  extrabold: "900",
} as const;

const display_base = {
  fontFamily: "Figtree_700Bold",
  // lineHeight: 1.2,
  letterSpacing: 0,
};

const display = StyleSheet.create({
  large: {
    ...display_base,
    fontSize: 42,
  },
  medium: {
    ...display_base,
    fontSize: 36,
  },
  small: {
    ...display_base,
    fontSize: 32,
  },
});

const heading_base = {
  fontFamily: "Figtree_700Bold",
  // lineHeight: 1.2,
  letterSpacing: 0,
};

const heading = StyleSheet.create({
  large: {
    ...heading_base,
    fontSize: 28,
  },
  medium: {
    ...heading_base,
    fontSize: 26,
  },
  small: {
    ...heading_base,
    fontSize: 24,
  },
  xsmall: {
    fontFamily: "Figtree_500Medium",
    fontSize: 20,
  },
});

const body_base = {
  fontFamily: "Figtree_400Regular",
  // lineHeight: 1.2,
  letterSpacing: 0,
};

const body = StyleSheet.create({
  large: {
    ...body_base,
    fontSize: 18,
  },
  medium: {
    ...body_base,
    fontSize: 16,
  },
  small: {
    ...body_base,
    fontSize: 14,
  },
  xsmall: {
    ...body_base,
    fontSize: 12,
  },
});

const label_base = {
  fontFamily: "Figtree_500Medium",
  // lineHeight: 1.2,
  letterSpacing: 0,
};

const label = StyleSheet.create({
  large: {
    ...label_base,
    fontSize: 16,
  },
  medium: {
    ...label_base,
    fontSize: 14,
  },
  small: {
    ...label_base,
    fontSize: 12,
  },
  xsmall: {
    ...label_base,
    fontSize: 10,
  },
});

export const font = {
  display,
  heading,
  body,
  label,
};
