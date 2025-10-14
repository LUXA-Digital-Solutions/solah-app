import { View } from "react-native";
import { AppButton } from "../shared/components/Button";

export default function OnboardingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FDFDFD",
      }}
    >
      <AppButton title="Continue" variant="filled" onPress={() => console.log("Continue")} />
      <AppButton title="Skip" variant="ghost" onPress={() => console.log("Skip")} />
    </View>
  );
}
