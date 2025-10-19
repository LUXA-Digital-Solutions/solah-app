import { useRouter } from "expo-router";
import { View, Text, useWindowDimensions } from "react-native";

import { Card } from "@/features-adhkar/components/Card";
import { context, fontsize } from "@/shared/styles";

export function AdhkarCard() {
  const router = useRouter();
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
          color: context.brand.primary,
        }}
      >
        Adhkar
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: CONTAINER_WIDTH,
          alignSelf: "center",
          gap: 8,
          paddingHorizontal: 0,
        }}
      >
        {/* Left - Large Card */}
        <View style={{ width: "50%", justifyContent: "flex-start" }}>
          <Card
            title="Before Prayer"
            subtitle="Upon completing the ablution"
            onPress={() => {
              router.push("/adhkar/before");
            }}
            variant="large"
            width="100%"
            height={268}
            bgStyle="dark"
            illustration={require("@/assets/images/solah_illustrations/Group.png")}
          />
        </View>

        {/* Right - Two Small Cards Stacked */}
        <View
          style={{
            width: "50%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Card
            title="During Prayer"
            subtitle="While bowing in prayer (Rukoo')"
            onPress={() => {
              router.push("/adhkar/during");
            }}
            variant="small"
            width={177}
            height={129}
            bgStyle="light"
            illustration={require("@/assets/images/solah_illustrations/Prostration.png")}
          />
          <Card
            title="After Prayer"
            subtitle="Remembrance after saläm"
            onPress={() => {
              router.push("/adhkar/after");
            }}
            variant="small"
            width={177}
            height={129}
            bgStyle="light"
            illustration={require("@/assets/images/solah_illustrations/AfterSolah.png")}
          />
        </View>
      </View>
    </>
  );
}
