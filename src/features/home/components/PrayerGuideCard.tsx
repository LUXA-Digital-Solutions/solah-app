import { Pressable, Text, View } from "react-native";

import { colors, fontsize } from "@/shared/styles";

export const PrayerGuideCard = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        width: "100%",
        marginTop: 24,
        position: "relative",
        marginInline: "auto",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#7F5539",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "semibold",
            textAlign: "left",
            color: colors.white,
          }}
        >
          Prayer Guide
        </Text>

        <Text
          style={{
            fontSize: fontsize.sm,
            textAlign: "left",
            color: "#E6D3C7",
          }}
        >
          Learn Solah the Prophetic Way
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: "#B37B56",
          marginTop: 12,
          padding: 12,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontSize: fontsize.md,
            textAlign: "left",
            color: colors.white,
            fontWeight: "semibold",
          }}
        >
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};
