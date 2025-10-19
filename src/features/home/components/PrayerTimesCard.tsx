import {
  ChevronDown,
  Clock,
  CloudMoon,
  CloudSun,
  MoonStar,
  Sun,
  Sunset,
} from "lucide-react-native";
import { Image, Pressable, Text, View, useWindowDimensions } from "react-native";

import { fontsize } from "@/shared/styles";

const TIMESOFSALAH = [
  { title: "Subhi", icon: <CloudMoon color={"#E6D3C7"} size={18} /> },
  { title: "Zuhr", icon: <Sun color={"#E6D3C7"} size={18} /> },
  { title: "Asr", icon: <CloudSun color={"#E6D3C7"} size={18} /> },
  { title: "Maghrib", icon: <Sunset color={"#E6D3C7"} size={18} /> },
  { title: "Isha'", icon: <MoonStar color={"#E6D3C7"} size={18} /> },
];

export const PrayerTimesCard = () => {
  const { width } = useWindowDimensions();
  const CONTAINER_WIDTH = Math.min(380, width - 20);

  return (
    <View
      style={{
        flexDirection: "column",
        gap: 24,
        width: CONTAINER_WIDTH,
        marginBottom: 24,
        position: "relative",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#B37B56",
        overflow: "hidden",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
            Next prayer time
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Clock size={20} color={"white"} />

            <Text
              style={{
                fontSize: fontsize.md,
                textAlign: "left",
                fontWeight: "semibold",
                color: "white",
              }}
            >
              19:01
            </Text>
          </View>
        </View>

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
            Nigeria
          </Text>

          <ChevronDown color={"white"} size={18} />
        </Pressable>
      </View>

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
          11th Rabi’ Ath-Thani 1447
        </Text>

        <Text
          style={{
            fontSize: 42,
            textAlign: "left",
            fontWeight: "bold",
            color: "white",
          }}
        >
          18:24
        </Text>
      </View>

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
            {time.icon}
            <Text
              style={{
                fontSize: 12,
                textAlign: "left",
                color: "#E6D3C7",
              }}
            >
              {time.title}
            </Text>
          </View>
        ))}
      </View>

      <Image
        source={require("@/assets/images/home-image-1.png")}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
        resizeMode="cover"
      />
    </View>
  );
};
