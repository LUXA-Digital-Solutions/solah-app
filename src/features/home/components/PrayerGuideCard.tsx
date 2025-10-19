import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { AppButton } from "@/shared/components";
import { background, context, fontsize } from "@/shared/styles";

export const PrayerGuideCard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Prayer Guide</Text>

        <Text style={styles.subtitle}>Learn Solah the Prophetic Way</Text>
      </View>

      <AppButton
        title="Get Started"
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={() => router.push("/(tabs)/guide")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 24,
    position: "relative",
    padding: 12,
    borderRadius: 8,
    backgroundColor: background.brand.secondary,
  },
  textContainer: {
    gap: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: "semibold",
    textAlign: "left",
    color: context.default.inverted,
  },
  subtitle: {
    fontSize: fontsize.sm,
    textAlign: "left",
    color: context.brand.inverted,
  },
  button: {
    backgroundColor: background.brand.primary,
    marginTop: 12,
  },
  buttonText: {
    fontSize: fontsize.md,
    fontWeight: "bold",
  },
});
