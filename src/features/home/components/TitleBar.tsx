import { Bell, Search } from "lucide-react-native";
import { View, Pressable, Text, StyleSheet } from "react-native";

import { fontsize } from "@/shared/styles";

export const TitleBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solah Guide</Text>

      <View style={styles.ctaWrapper}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 38,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  title: {
    fontSize: fontsize.xxl,
    textAlign: "left",
    fontWeight: "bold",
  },
  ctaWrapper: {
    flexDirection: "row",
    width: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
});
