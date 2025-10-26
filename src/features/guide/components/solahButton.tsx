import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import { colors, spacing, borderRadius } from "@/shared/styles";

interface SolahButtonProps {
  name: string;
  description: string;
  rakaat: string;
  illustration: any;
  onPress?: () => void;
}

export const SolahButton = ({
  name,
  description,
  rakaat,
  illustration,
  onPress,
}: SolahButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.descriptionText}>
          {name} • {description}
        </Text>
        <Text style={styles.rakaatText}>{rakaat}</Text>
      </View>
      <Image source={illustration} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 89,
    backgroundColor: colors.background.default.primary, // #FDFDFD
    borderWidth: 1,
    borderColor: colors.border.default.tertiary, // #E8E8E8
    borderRadius: borderRadius.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing.m,
    marginBottom: spacing.md,
    alignSelf: "center", // centers in ScrollView
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  rakaatText: {
    fontFamily: "Figtree_700Bold",
    fontSize: 32,
    color: colors.context.default.primary, // #333333
    lineHeight: 38,
  },
  descriptionText: {
    fontFamily: "Figtree_600SemiBold",
    fontSize: 12,
    lineHeight: 16,
    color: colors.context.brand.secondary, // #B37B56
  },
  image: {
    width: 55,
    height: 55,
  },
});
