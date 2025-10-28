import { StyleSheet } from "react-native";

import { colors } from "@/shared/styles/colors";
import { font } from "@/shared/styles/font";
import { spacing } from "@/shared/styles/layout";

export const itemStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.sm,
    paddingHorizontal: 0,
    justifyContent: "space-between",
  },
  pressed: {
    backgroundColor: colors.background.default.secondary,
    borderRadius: 8,
  },
  left: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  right: {
    alignItems: "flex-end",
    minWidth: 80,
  },
  label: {
    fontSize: font.body.medium.fontSize,
    fontFamily: font.body.medium.fontFamily,
    color: colors.context.brand.primary,
  },
  value: {
    fontSize: font.body.small.fontSize,
    fontFamily: font.body.small.fontFamily,
    color: colors.context.default.secondary,
    marginTop: 6,
  },
});
