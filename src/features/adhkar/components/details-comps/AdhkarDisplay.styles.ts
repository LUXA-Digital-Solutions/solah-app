import { StyleSheet } from "react-native";

import { colors } from "@/shared/styles/colors";
import { font } from "@/shared/styles/font";
import { spacing } from "@/shared/styles/layout";

export const adkharDisplayStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default.primary,
  },
  section: {
    marginHorizontal: spacing.md,
    marginTop: spacing.lg,
  },
  arabicTextWrap: {
    alignItems: "flex-end",
    marginBottom: spacing.sm,
  },
  arabicText: {
    fontSize: 28,
    fontFamily: font.display.medium.fontFamily ?? font.heading.medium.fontFamily,
    lineHeight: 38,
    color: colors.context.brand.primary,
  },
  transliteration: {
    fontSize: font.body.small.fontSize,
    fontFamily: font.body.small.fontFamily,
    fontStyle: "italic",
    color: colors.context.default.secondary,
    marginBottom: spacing.sm,
  },
  translation: {
    fontSize: font.body.medium.fontSize,
    fontFamily: font.body.medium.fontFamily,
    color: colors.context.default.primary,
    marginBottom: spacing.sm,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border.default.tertiary,
    marginVertical: spacing.lg,
  },
});
