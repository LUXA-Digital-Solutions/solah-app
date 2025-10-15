import { StyleSheet, Dimensions } from "react-native";

import { colors } from "./colors";

// SPACING
export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

export type Spacing = keyof typeof spacing;

// BORDERS

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
} as const;

export type BorderRadius = keyof typeof borderRadius;

export const borderWidth = {
  xs: StyleSheet.hairlineWidth,
  sm: 1,
  md: 2,
  lg: 4,
  xl: 8,
} as const;

export type BorderWidth = keyof typeof borderWidth;

// SCREEN STYLES

const baseStyle = {
  bgColor: colors.primary[100],
  padding: spacing.lg,
};

export const screenDimension: {
  width: number;
  height: number;
} = Dimensions.get("window");

export const screenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseStyle.bgColor,
    paddingHorizontal: baseStyle.padding,
  },
});

export const keyboardViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseStyle.bgColor,
    paddingHorizontal: baseStyle.padding,
    justifyContent: "center",
  },
});

export const emptyScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseStyle.bgColor,
    paddingHorizontal: baseStyle.padding,
    justifyContent: "center",
    alignItems: "center",
  },
});
