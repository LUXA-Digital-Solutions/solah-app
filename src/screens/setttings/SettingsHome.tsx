import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TitleBar } from "@/shared/components";
import { screenStyle } from "@/shared/styles";

export function SettingsHome() {
  const { bottom } = useSafeAreaInsets();
  return (
    <ScrollView
      style={{
        ...screenStyle.container,
        paddingBottom: bottom,
      }}
      showsVerticalScrollIndicator={false}
    >
      <TitleBar title="Settings" showBack={false} />
    </ScrollView>
  );
}
