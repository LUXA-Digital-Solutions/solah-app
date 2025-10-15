import { View, Text, useWindowDimensions } from "react-native";

import { colors, fontsize } from "@/shared/styles";

import { Card } from "./Card";

export function HomeSection() {
  const { width } = useWindowDimensions();
  const CONTAINER_WIDTH = Math.min(380, width - 20);

  return (
    <>
      <Text
        style={{
          fontSize: fontsize.xl,
          textAlign: "left",
          marginBottom: 20,
          fontWeight: "bold",
          paddingLeft: 10,
          color: "#333333",
        }}
      >
        Adhkar
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: CONTAINER_WIDTH,
          alignSelf: "center",
          gap: 8,
          paddingHorizontal: 0,
        }}
      >
        {/* Left - Large Card */}
        <View style={{ width: 170, justifyContent: "flex-start" }}>
          <Card
            title="Before Prayer"
            subtitle={`Upon\ncompleting\nthe ablution`}
            onPress={() => {}}
            variant="large"
            width={170}
            height={268}
            backgroundColor={colors.primary[700]}
            illustration={require("@/assets/images/solah_illustrations/Group.png")}
          />
        </View>

        {/* Right - Two Small Cards Stacked */}
        <View style={{ width: 160, justifyContent: "flex-start" }}>
          <Card
            title="During Prayer"
            subtitle="While bowing in prayer (Rukoo')"
            onPress={() => {}}
            variant="small"
            width={177}
            height={126}
            backgroundColor={colors.primary[200]}
            illustration={require("@/assets/images/solah_illustrations/Prostration.png")}
          />
          <View style={{ height: 16 }} />
          <Card
            title="After Prayer"
            subtitle="Remembrance after saläm"
            onPress={() => {}}
            variant="small"
            width={177}
            height={126}
            backgroundColor={colors.primary[200]}
            illustration={require("@/assets/images/solah_illustrations/AfterSolah.png")}
          />
        </View>
      </View>
    </>
  );
}
