import { useRouter } from "expo-router";
import { Image, Pressable, View, useWindowDimensions } from "react-native";

import {
  CurrentDateAndTime,
  CurrentSolahIcons,
  NextSolahTime,
  CurrentLocation,
} from "@/features-solah/components";
import { background } from "@/shared/styles";

export const PrayerTimesCard = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const CONTAINER_WIDTH = Math.min(380, width - 20);

  return (
    <Pressable
      style={{
        rowGap: 24,
        width: CONTAINER_WIDTH,
        marginBottom: 24,
        position: "relative",
        padding: 12,
        borderRadius: 8,
        backgroundColor: background.brand.primary,
        overflow: "hidden",
      }}
      onPress={() => router.push("/solah/solah-time")}
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
          bottom: 0,
          right: 0,
          opacity: 0.4,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};
