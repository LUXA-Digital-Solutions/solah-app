import { StyleSheet } from "react-native";

import { colors } from "@/shared/styles/colors";
import { spacing, borderRadius } from "@/shared/styles/layout";

export const detailsActionBarStyles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
    marginHorizontal: spacing.md,
    backgroundColor: "#ecd8cf",
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginHorizontal: spacing.sm,
    width: 44,
    height: 44,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImage: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    tintColor: colors.context.brand.primary,
  },
});
