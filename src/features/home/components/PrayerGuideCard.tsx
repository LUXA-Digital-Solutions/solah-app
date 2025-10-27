import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

import { AppButton } from "@/shared/components";
import { fontsize } from "@/shared/styles";

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
    marginTop: 24,
    position: "relative",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "var(--Background-Brand-Inverted, #E6D3C7)",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
    zIndex: 2,
    paddingRight: 8,
  },
  textContainer: {
    gap: 4,
    marginBottom: 12,
  },
  title: {
    fontFamily: "Figtree",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    color: "#483020",
  },
  subtitle: {
    fontFamily: "Figtree",
    fontSize: 13,
    textAlign: "left",
    color: "#B37B56",
  },
  button: {
    backgroundColor: "#B37B56",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: "Figtree",
    fontSize: fontsize.md,
    fontWeight: "600",
    color: "#FDFDFD",
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
