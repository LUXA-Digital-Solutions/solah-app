import { AudioLines, Bell } from "lucide-react-native";
import { Pressable, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HomeSection as AdhkarHomeSection } from "@/features/adhkar/components/HomeSection";
import { PrayerTimesCard } from "@/features/home/components/PrayerTimesCard";
import { fontsize, screenStyle } from "@/shared/styles";

/**
 * HomeScreen component
 *
 * @description
 * Renders the main home screen for the Solah app. The layout is wrapped
 * in a ScrollView and automatically adjusts its top and bottom padding
 * according to the device's safe area insets to ensure proper spacing
 * on devices with notches, status bars, or navigation indicators.
 *
 *
 * @example
 * ```tsx
 * <HomeScreen />
 * ```
 */

export function HomeScreen() {
  const { top, bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const CONTAINER_WIDTH = Math.min(380, width - 20);

  return (
    <ScrollView
      style={{
        ...screenStyle.container,
        backgroundColor: "white",
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: CONTAINER_WIDTH,
          height: 38,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontSize: fontsize.xxxl,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Prayer Guide
        </Text>

        <View
          style={{
            flexDirection: "row",
            width: "auto",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <Pressable>
            <Bell />
          </Pressable>
          <Pressable>
            <AudioLines />
          </Pressable>
        </View>
      </View>

      <PrayerTimesCard />
      <AdhkarHomeSection />
    </ScrollView>
  );
}
