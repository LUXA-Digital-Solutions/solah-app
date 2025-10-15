import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { HomeSection as AdhkarHomeSection } from "@/features/adhkar/components/HomeSection";
import { screenStyle } from "@/shared/styles";

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

  return (
    <ScrollView
      style={{
        ...screenStyle.container,
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <AdhkarHomeSection />
    </ScrollView>
  );
}
