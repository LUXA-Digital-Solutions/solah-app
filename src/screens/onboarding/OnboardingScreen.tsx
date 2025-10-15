import { router } from "expo-router";
import { View, Text } from "react-native";

import { AppButton } from "@/shared/components";
import { emptyScreenStyle } from "@/shared/styles";

export function OnboardingScreen() {
  return (
    <View style={emptyScreenStyle.container}>
      <Text>Onboarding Screen</Text>
      <AppButton
        title="Go to Tabs"
        onPress={() => {
          router.push("/(tabs)/home");
        }}
      />
    </View>
  );
}
