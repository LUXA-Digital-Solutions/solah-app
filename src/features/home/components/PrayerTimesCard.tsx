import { Image, View, useWindowDimensions } from "react-native";

import {
  CurrentDateAndTime,
  CurrentSolahIcons,
  NextSolahTime,
  CurrentLocation,
} from "@/features-solah/components";

export const PrayerTimesCard = () => {
  const { width } = useWindowDimensions();
  const CONTAINER_WIDTH = Math.min(380, width - 20);

  return (
    <View
      style={{
        flexDirection: "column",
        gap: 24,
        width: CONTAINER_WIDTH,
        marginBottom: 24,
        position: "relative",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#B37B56",
        overflow: "hidden",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <NextSolahTime />
        <CurrentLocation />
      </View>

      <CurrentDateAndTime />
      <CurrentSolahIcons />

      <Image
        source={require("@/assets/images/home-image-1.png")}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
        resizeMode="cover"
      />
    </View>
  );
};
