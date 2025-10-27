import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

import { AppButton } from "@/shared/components";
import { colors } from "@/shared/styles/colors";
import { fontsize, fontweight } from "@/shared/styles/font";
import { spacing, borderRadius } from "@/shared/styles/layout";

export const PrayerGuideCard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Prayer Guide</Text>
          <Text style={styles.subtitle}>Learn Solah the Prophetic Way</Text>
        </View>

        <AppButton
          title="Get started"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => router.push("/(tabs)/guide")}
        />
      </View>

      <Image
        source={require("@/assets/images/solah_illustrations/prayerguide.png")}
        style={styles.illustration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: spacing.xl,
    position: "relative",
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.background.brand.inverted, // ✅ using palette
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    zIndex: 2,
    paddingRight: spacing.sm,
  },
  textContainer: {
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: "Figtree_600SemiBold",
    fontSize: fontsize.xxl,
    fontWeight: fontweight.semibold,
    textAlign: "left",
    color: colors.context.brand.primary, // ✅ palette.primary[900]
  },
  subtitle: {
    fontFamily: "Figtree_400Regular",
    fontSize: fontsize.sm,
    textAlign: "left",
    color: colors.context.brand.secondary, // ✅ palette.primary[500]
  },
  button: {
    backgroundColor: colors.background.brand.primary, // ✅ palette.primary[500]
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
  },
  buttonText: {
    fontFamily: "Figtree_600SemiBold",
    fontSize: fontsize.md,
    fontWeight: fontweight.semibold,
    color: colors.context.brand.inverted, // ✅ palette.primary[100]
  },
  illustration: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 140,
    height: "100%",
    resizeMode: "contain",
    zIndex: 1,
  },
});
