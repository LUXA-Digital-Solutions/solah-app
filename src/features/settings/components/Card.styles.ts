import { StyleSheet } from "react-native";

import { colors } from "@/shared/styles/colors";
import { font } from "@/shared/styles/font";
import { spacing, borderRadius } from "@/shared/styles/layout";

export const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default.primary,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border.default.tertiary,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: font.label.large.fontSize,
    fontFamily: font.label.large.fontFamily,
    color: colors.context.brand.primary,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: font.body.small.fontSize,
    fontFamily: font.body.small.fontFamily,
    color: colors.context.default.secondary,
    marginBottom: spacing.sm,
  },
  content: {
    // children flow here
  },
});
