import { View, Text } from "react-native";

import { useDateAndTime } from "@/features-solah/hooks";
import { fontsize } from "@/shared/styles";

export function CurrentDateAndTime() {
  const { date, time } = useDateAndTime();

  return (
    <View
      style={{
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Text
        style={{
          fontSize: fontsize.xs,
          textAlign: "left",
          color: "#E6D3C7",
        }}
      >
        {date}
      </Text>

      <Text
        style={{
          fontSize: 42,
          textAlign: "left",
          fontWeight: "bold",
          color: "white",
        }}
      >
        {time}
      </Text>
    </View>
  );
}
