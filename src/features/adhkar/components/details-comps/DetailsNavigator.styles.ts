import { StyleSheet } from "react-native";

import { colors } from "@/shared/styles/colors";
import { font } from "@/shared/styles/font";
import { spacing, borderRadius } from "@/shared/styles/layout";

export const detailsNavigatorStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.context.brand.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  chevronLeft: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  titleWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    ...font.heading.xsmall,
    color: colors.background.default.primary,
    fontWeight: "700",
  },
  chevronRight: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
