import { useRouter } from "expo-router";
import { Image, Pressable, View, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { colors } from "@/shared/styles";

import { CurrentDateAndTime } from "./CurrentDateAndTime";
import { CurrentLocation } from "./CurrentLocation";
import { CurrentSolahIcons } from "./CurrentSolahIcons";
import { NextSolahTime } from "./NextSolahTime";

interface PrayerTimeCardProps {
  homePage?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const PrayerTimesCard = ({ homePage = false, style }: PrayerTimeCardProps) => {
  const router = useRouter();

  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => {
        if (homePage) return router.push("/solah/solah-time");
      }}
    >
      <View style={styles.subContainer}>
        <NextSolahTime />
        <CurrentLocation />
      </View>

      <CurrentDateAndTime />
      {homePage && <CurrentSolahIcons />}

      <Image
        source={require("@/assets/images/home-image-1.png")}
        style={[styles.image, homePage && { top: null, bottom: 0 }]}
        resizeMode="cover"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 24,
    rowGap: 24,
    position: "relative",
    padding: 12,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 24,
    backgroundColor: colors.background.brand.primary,
  },
  image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    opacity: 0.8,
    width: "60%",
    height: "100%",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
