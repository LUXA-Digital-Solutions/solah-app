import { useRouter } from "expo-router";
import { Image, Pressable, View, StyleSheet } from "react-native";

import {
  CurrentDateAndTime,
  CurrentSolahIcons,
  NextSolahTime,
  CurrentLocation,
} from "@/features-solah/components";
import { background } from "@/shared/styles";

export const PrayerTimesCard = () => {
  const router = useRouter();

  return (
    <Pressable style={styles.container} onPress={() => router.push("/solah/solah-time")}>
      <View style={styles.subContainer}>
        <NextSolahTime />
        <CurrentLocation />
      </View>

      <CurrentDateAndTime />
      <CurrentSolahIcons />

      <Image
        source={require("@/assets/images/home-image-1.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 24,
    rowGap: 16,
    position: "relative",
    padding: 12,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 24,
    backgroundColor: background.brand.primary,
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    opacity: 0.4,
    width: "60%",
    height: "100%",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
