import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";

import { Card } from "@/features-adhkar/components";
import { context, fontsize } from "@/shared/styles";

export function AdhkarCard() {
  const router = useRouter();

  return (
    <>
      <Text style={styles.title}>Adhkār</Text>

      <View style={styles.mainCardWrapper}>
        {/* Left - Large Card */}
        <View style={styles.largeCardWrapper}>
          <View style={styles.cardContainer}>
            <Image
              source={require("@/assets/images/solah_illustrations/man-ablution.png")}
              style={styles.largeCardImage}
            />
            <Card
              title="Before Prayer"
              subtitle="Upon completing the ablution"
              onPress={() => {
                router.push("/adhkar/before");
              }}
              variant="large"
              height={268}
              bgStyle="dark"
            />
          </View>
        </View>

        {/* Right - Two Small Cards Stacked */}
        <View style={styles.smallCardWrapper}>
          <View style={styles.cardContainer}>
            <Image
              source={require("@/assets/images/solah_illustrations/Prostration.png")}
              style={styles.smallCardImage}
            />
            <Card
              title="During Prayer"
              subtitle="While bowing in prayer (Rukoo')"
              onPress={() => {
                router.push("/adhkar/during");
              }}
              variant="small"
              height={129}
              bgStyle="light"
            />
          </View>

          <View style={styles.cardContainer}>
            <Image
              source={require("@/assets/images/solah_illustrations/AfterSolah.png")}
              style={styles.smallCardImage}
            />
            <Card
              title="After Prayer"
              subtitle="Remembrance after salām"
              onPress={() => {
                router.push("/adhkar/after");
              }}
              variant="small"
              height={129}
              bgStyle="light"
            />
          </View>
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
  largeCardWrapper: {
    width: "50%",
    justifyContent: "flex-start",
  },
  smallCardWrapper: {
    width: "48%",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },

  // ✅ Container clips overflow and establishes stacking context
  cardContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 16,
  },

  // ✅ Image positioned behind the card content
  largeCardImage: {
    position: "absolute",
    bottom: -15,
    right: 0,
    width: 150,
    height: 150,
    resizeMode: "contain",
    zIndex: 1,
  },

  // ✅ Image stretches from top to bottom of the card
  smallCardImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    width: 110,
    height: "100%",
    resizeMode: "cover", // Changed from "contain" to "cover" to fill the entire height
    zIndex: 1,
  },
});
