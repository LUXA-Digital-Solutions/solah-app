import { CloudMoon, CloudSun, MoonStar, Sun, Sunset } from "lucide-react-native";
import { View, Text } from "react-native";

import { useCurrentSolah } from "@/features-solah/hooks";

const currentIconColor = "#FFD700";
const defaultIconColor = "#E6D3C7";
const iconSize = 18;

const TIMESOFSALAH = [
  {
    title: "Subhi",
    icon: (isCurrent: boolean) => (
      <CloudMoon color={isCurrent ? currentIconColor : defaultIconColor} size={iconSize} />
    ),
  },
  {
    title: "Zuhr",
    icon: (isCurrent: boolean) => (
      <Sun color={isCurrent ? currentIconColor : defaultIconColor} size={iconSize} />
    ),
  },
  {
    title: "Asr",
    icon: (isCurrent: boolean) => (
      <CloudSun color={isCurrent ? currentIconColor : defaultIconColor} size={iconSize} />
    ),
  },
  {
    title: "Maghrib",
    icon: (isCurrent: boolean) => (
      <Sunset color={isCurrent ? currentIconColor : defaultIconColor} size={iconSize} />
    ),
  },
  {
    title: "Isha'",
    icon: (isCurrent: boolean) => (
      <MoonStar color={isCurrent ? currentIconColor : defaultIconColor} size={iconSize} />
    ),
  },
];

export function CurrentSolahIcons() {
  const { currentSolah } = useCurrentSolah();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 14,
      }}
    >
      {TIMESOFSALAH.map((time) => (
        <View
          key={time.title}
          style={{
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "flex-start",
            gap: 2,
          }}
        >
          {time.icon(currentSolah === time.title)}
          <Text
            style={{
              fontSize: 12,
              textAlign: "left",
              color: currentSolah === time.title ? currentIconColor : defaultIconColor,
            }}
          >
            {time.title}
          </Text>
        </View>
      ))}
    </View>
  );
}
