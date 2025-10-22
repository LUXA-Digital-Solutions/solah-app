import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

import { Card } from "@/features-adhkar/components";
import { context, fontsize } from "@/shared/styles";

export function AdhkarCard() {
  const router = useRouter();

  return (
    <>
      <Text style={styles.title}>Adhkar</Text>

      <View style={styles.mainCardWrapper}>
        {/* Left - Large Card */}
        <View style={styles.largeCardWrapper}>
          <Card
            title="Before Prayer"
            subtitle="Upon completing the ablution"
            onPress={() => {
              router.push("/adhkar/before");
            }}
            variant="large"
            // width="100%"
            height={268}
            bgStyle="dark"
            illustration={require("@/assets/images/solah_illustrations/Group.png")}
          />
        </View>

        {/* Right - Two Small Cards Stacked */}
        <View style={styles.smallCardWrapper}>
          <Card
            title="During Prayer"
            subtitle="While bowing in prayer (Rukoo')"
            onPress={() => {
              router.push("/adhkar/during");
            }}
            variant="small"
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
            height={129}
            bgStyle="light"
            illustration={require("@/assets/images/solah_illustrations/AfterSolah.png")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontsize.xl,
    textAlign: "left",
    marginBottom: 20,
    fontWeight: "bold",
    color: context.brand.primary,
  },
  mainCardWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center",
    gap: 8,
    paddingHorizontal: 0,
    boxSizing: "border-box",
  },
  largeCardWrapper: { width: "50%", justifyContent: "flex-start" },
  smallCardWrapper: {
    width: "48%",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
});
