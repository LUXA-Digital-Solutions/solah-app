import { StyleSheet } from "react-native";

import { colors } from "../../../shared/styles/colors";
import { font } from "../../../shared/styles/font";
import { spacing, borderRadius, borderWidth } from "../../../shared/styles/layout";

const BORDER_COLOR = colors.border.brand.primary;
const TEXT_COLOR = colors.context.brand.primary;
const BG = colors.background.default.primary;

export const adhkarListItemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginHorizontal: spacing.md,
    marginBottom: spacing.m,
    borderRadius: borderRadius.lg,
    borderWidth: borderWidth.md,
    borderColor: BORDER_COLOR,
    backgroundColor: BG,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingRight: spacing.sm,
  },
  iconPlaceholder: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.6,
    borderColor: BORDER_COLOR,
    marginRight: spacing.md,
  },
  title: {
    flexShrink: 1,
    fontSize: font.label.large.fontSize,
    fontFamily: font.label.large.fontFamily,
    fontWeight: "700",
    color: TEXT_COLOR,
    lineHeight: 22,
  },
  right: {
    width: 56,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  countText: {
    fontSize: font.label.medium.fontSize,
    fontFamily: font.label.medium.fontFamily,
    fontWeight: "700",
    color: BORDER_COLOR,
  },
});
