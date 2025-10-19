import { Bell, Search } from "lucide-react-native";
import { View, Pressable, Text, useWindowDimensions } from "react-native";

import { fontsize } from "@/shared/styles";

export const TitleBar = () => {
  const { width } = useWindowDimensions();
  const CONTAINER_WIDTH = Math.min(380, width - 20);

  return (
    <View
      style={{
        flexDirection: "row",
        width: CONTAINER_WIDTH,
        height: 38,
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontSize: fontsize.xxl,
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        Solah Guide
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
          <Search />
        </Pressable>
      </View>
    </View>
  );
};
