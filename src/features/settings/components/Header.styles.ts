import { StyleSheet } from "react-native";

import { colors } from "@/shared/styles/colors";
import { font } from "@/shared/styles/font";
import { spacing, borderRadius } from "@/shared/styles/layout";

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.background.default.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.default.tertiary,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: font.heading.xsmall.fontSize,
    fontFamily: font.heading.xsmall.fontFamily,
    fontWeight: "700",
    color: colors.context.brand.primary,
  },
  backButton: {
    padding: spacing.xs,
    borderRadius: borderRadius.sm,
    minWidth: 36,
    minHeight: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonPressed: {
    backgroundColor: colors.background.default.secondary,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: colors.context.brand.primary,
  },
  placeholder: {
    width: 36, // Keeps title centered
  },
});
