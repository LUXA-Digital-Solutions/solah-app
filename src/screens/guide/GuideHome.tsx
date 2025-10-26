import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import { SolahButton } from "@/features/guide/components/solahButton";
import { colors, font, spacing } from "@/shared/styles";

export enum SolahName {
  Fajr = "Fajr",
  Dhuhr = "Dhuhr",
  Asr = "Asr",
  Maghrib = "Maghrib",
  Isha = "Isha",
}

// Temporary constant data
const solahData = [
  {
    name: SolahName.Fajr,
    description: "Dawn prayer",
    rakaat: "2 Raka’h",
    illustration: require("@/assets/guide-illustrations/Fajr.png"),
  },
  {
    name: SolahName.Dhuhr,
    description: "Midday prayer",
    rakaat: "4 Raka’h",
    illustration: require("@/assets/guide-illustrations/Dhuhr.png"),
  },
  {
    name: SolahName.Asr,
    description: "Afternoon prayer",
    rakaat: "4 Raka’h",
    illustration: require("@/assets/guide-illustrations/Asr.png"),
  },
  {
    name: SolahName.Maghrib,
    description: "Evening prayer",
    rakaat: "3 Raka’h",
    illustration: require("@/assets/guide-illustrations/Magrib.png"),
  },
  {
    name: SolahName.Isha,
    description: "Night prayer",
    rakaat: "4 Raka’h",
    illustration: require("@/assets/guide-illustrations/Isha.png"),
  },
];

export const GuideHome = () => {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={26} color={colors.context.default.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Solah Guide</Text>
      </View>

      {/* Solah Cards */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {solahData.map((item) => (
          <SolahButton
            key={item.name}
            name={item.name}
            description={item.description}
            rakaat={item.rakaat}
            illustration={item.illustration}
            onPress={() => router.push(`/guide/solah-guide?name=${item.name}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background.default.primary, // #FDFDFD
    paddingHorizontal: spacing.lg, // consistent padding from edges
    paddingTop: spacing.xl,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  backButton: {
    marginRight: spacing.sm,
  },
  title: {
    ...font.heading.large,
    color: colors.context.default.primary, // #333333
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
});
