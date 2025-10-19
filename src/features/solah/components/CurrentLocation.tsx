import { ChevronDown } from "lucide-react-native";
import { Pressable, Text } from "react-native";

import { useCurrentLocation } from "@/features-solah/hooks";
import { fontsize } from "@/shared/styles";

export function CurrentLocation() {
  const { location } = useCurrentLocation();
  return (
    <Pressable
      style={{
        position: "relative",
        zIndex: 10,
        height: 27,
        backgroundColor: "rgba(255, 255, 255, 0.20)",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        borderRadius: 22,
        paddingLeft: 6,
        paddingRight: 2,
      }}
    >
      <Text
        style={{
          fontSize: fontsize.xs,
          textAlign: "left",
          color: "white",
        }}
      >
        {location}
      </Text>

      <ChevronDown color={"white"} size={18} />
    </Pressable>
  );
}
